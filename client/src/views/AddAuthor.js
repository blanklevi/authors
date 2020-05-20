import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import axios from "axios";

const NewAuthor = (props) => {
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});

  const handleCreate = (event) => {
    event.preventDefault();
    const newAuthor = {
      name: name,
    };
    axios
      .post("http://localhost:8000/api/authors/new", newAuthor)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        setErrors(err.response.data.errors);
        console.log(err.response.data.errors);
      });
  };

  const handleCancel = (event) => {
    navigate("/");
  };

  return (
    <div>
      <div className="container">
        <h1>Favorite Authors</h1>
        <a href="/">Home</a>
        <p>Add a new author:</p>
        <div>
          <form
            onSubmit={(event) => {
              handleCreate(event);
            }}
          >
            <div className="form-group">
              <label>Name: </label>
              <input
                className="form-control"
                type="text"
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
              {errors.name ? (
                <span style={{ color: "red", marginLeft: "5px" }}>
                  {errors.name.message}
                </span>
              ) : (
                ""
              )}
              <button
                onClick={(event) => {
                  handleCancel(event);
                }}
                className="btn btn-primary"
              >
                Cancel
              </button>{" "}
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewAuthor;

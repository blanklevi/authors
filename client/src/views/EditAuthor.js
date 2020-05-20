import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import axios from "axios";

const EditAuthor = (props) => {
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors/" + props.id)
      .then((res) => {
        setName(res.data.name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.id]);

  const handleEdit = (event) => {
    event.preventDefault();

    const editedAuthor = {
      name: name,
    };

    axios
      .put("http://localhost:8000/api/authors/update/" + props.id, editedAuthor)
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
        <p>Edit this author:</p>
        <div>
          <form
            onSubmit={(event) => {
              handleEdit(event);
            }}
          >
            <div className="form-group">
              <label>Name: </label>
              <input
                className="form-control"
                type="text"
                value={name}
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

export default EditAuthor;

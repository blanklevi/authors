import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import axios from "axios";

const Homepage = (props) => {
  const [authors, setAuthors] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:8000/api/authors").then((res) => {
      console.log(res);
      setAuthors(res.data.authors);
    });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8000/api/authors/delete/" + id)
      .then((res) => {
        const filteredAuthors = authors.filter((author) => {
          return author._id !== id;
        });

        setAuthors(filteredAuthors);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (authors === null) {
    return "Loading...";
  }

  return (
    <div>
      <div className="container">
        <h1>Favorite Authors</h1>
        <a href="/new">Add an author</a>
        <p>We have quotes by:</p>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Author</th>
              <th scope="col">Actions Available</th>
            </tr>
          </thead>
          <tbody>
            {authors.map((author) => {
              return (
                <tr key={author._id}>
                  <th scope="row">{author.name}</th>
                  <td>
                    <button
                      onClick={(event) => {
                        navigate(`/edit/${author._id}/`);
                      }}
                      className="btn btn-light"
                    >
                      Edit
                    </button>{" "}
                    <button
                      onClick={(event) => {
                        handleDelete(author._id);
                      }}
                      className="btn btn-warning"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Homepage;

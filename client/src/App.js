import React from "react";
import "./App.css";
import { Link, Redirect, Router } from "@reach/router";

import Homepage from "./views/Homepage";
import NewAuthor from "./views/AddAuthor";
import EditAuthor from "./views/EditAuthor";

function App() {
  return (
    <div className="App">
      <Router>
        <Homepage path="/" />
        <NewAuthor path="/new" />
        <EditAuthor path="edit/:id" />
      </Router>
    </div>
  );
}

export default App;

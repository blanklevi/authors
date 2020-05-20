const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

// This will fire our mongoose.connect statement to initialize our database connection
require("./config/mongoose.config.js");

app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the users routes function from our user.routes.js file
const AllMyAuthorsRoutes = require("./routes/authors.routes");
AllMyAuthorsRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));

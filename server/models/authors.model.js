const mongoose = require("mongoose");
const requiredErrMsg = "{PATH} is required.";

// PATH gets replaced by the key name
const AuthorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, requiredErrMsg],
      minlength: [3, "{PATH} must be at least {MINLENGTH} characters"],
    },
  },
  { timestamps: true }
);

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;

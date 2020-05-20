const Author = require("../models/authors.model");

module.exports.findAllAuthors = (req, res) => {
  Author.find()
    .then((allAuthors) => res.json({ authors: allAuthors }))
    .catch((err) => res.status(400).json(err));
};

module.exports.findOneAuthor = (req, res) => {
  Author.findOne({ _id: req.params.id })
    .then((oneAuthor) => res.json({ author: oneAuthor }))
    .catch((err) => res.status(400).json(err));
};

module.exports.createAuthor = (req, res) => {
  Author.create(req.body)
    .then((newlyCreatedAuthor) => res.json({ product: newlyCreatedAuthor }))
    .catch((err) => res.status(400).json(err));
};

module.exports.updateExistingAuthor = (req, res) => {
  Author.findOneAndUpdate(req.params.id, req.body, {
    runValidators: true,
    new: true,
  })
    .then((updatedAuthor) => res.json({ author: updatedAuthor }))
    .catch((err) => res.status(400).json(err));
};

module.exports.deleteAnExistingAuthor = (req, res) => {
  Author.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result: result }))
    .catch((err) => res.status(400).json(err));
};

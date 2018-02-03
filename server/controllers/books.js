const Book = require('../models').Books;

module.exports = {
  create(req, res) {
    console.log("--------- inne i controllers/books ---------")
    return Book
      .create({
        title: req.body.title,
        description: req.body.description,
        images: req.body.images,
        price: req.body.price
      })
      .then(todoItem => res.status(201).send(todoItem))
      .catch(error => res.status(400).send(error));
  },
};
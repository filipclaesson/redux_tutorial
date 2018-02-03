const Book = require('../models').Books;

module.exports = {
  
  create(req, res) {
    console.log(req.body)
    return Book
    .create({
      title: req.body.title,
      description: req.body.description,
      images: req.body.images,
      price: req.body.price
    })
    .then(book => res.status(201).send(book))
    .catch(error => res.status(400).send(error));
  }

  ,list(req, res) {
    return Book
    .findAll()
    .then(book => res.status(200).send(book))
    .catch(error => res.status(400).send(error));
  }
  
  ,delete(req, res) {
    var query = {id: req.params.id}
    return Book
    .destroy({
      where: query
    })
    .then(book => res.status(200).send(book))
    .catch(error => res.status(400).send(error));
  }

  // ,update(req, res) {
  //   var query = {id: req.params.id}
  //   return Book
  //   .destroy({
  //     where: query
  //   })
  //   .then(book => res.status(200).send(book))
  //   .catch(error => res.status(400).send(error));
  // },

};
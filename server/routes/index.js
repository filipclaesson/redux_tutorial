const booksController = require('../controllers').books;

module.exports = (app) => {
  app.get('/books', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));
  app.post('/books', booksController.create);

  //app.post('/books', booksController.create);
  // app.get('/api/todos', todosController.list);
  // app.post('/api/todos/:todoId/items', todoItemsController.create);

};
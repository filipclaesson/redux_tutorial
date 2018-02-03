const booksController = require('../controllers').books;

module.exports = (app) => {
  app.get('/books', booksController.list);
  app.post('/books', booksController.create);
  app.delete('/books/:id', booksController.delete);

  //app.post('/books', booksController.create);
  // app.get('/api/todos', todosController.list);
  // app.post('/api/todos/:todoId/items', todoItemsController.create);

};
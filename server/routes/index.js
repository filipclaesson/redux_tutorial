module.exports = (app) => {
  app.get('/books', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  // app.post('/api/todos', todosController.create);
  // app.get('/api/todos', todosController.list);
  // app.post('/api/todos/:todoId/items', todoItemsController.create);

};
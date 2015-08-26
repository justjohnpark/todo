var Todo = require('./models/todo');

module.exports = function(app) {
  // routes for node api ======================================
  app.get('/api/todos', function(req, res) {
    Todo.find(function(err, todos) {
      if (err)
        res.send(err)

      res.json(todos); // json
    });
  });

  app.post('/api/todos', function(req, res) {
    // comes from AJAX request on Angular
    Todo.create({
      text : req.body.text,
      done : false
    }, function(err, todo) {
      if (err)
        res.send(err);

      Todo.find(function(err, todos) {
        if (err)
          res.send(err)
        res.json(todos);
      });
    });
  });

  app.delete('/api/todos/:todo_id', function(req, res) {
    Todo.remove({
      _id : req.params.todo_id
    }, function(err, todo) {
      if (err)
        res.send(err);

      Todo.find(function(err, todos) {
        if (err)
          res.send(err)
        res.json(todos);
      });
    });
  });

  // routes for angular frontend ======================================
  app.get('*', function(req, res) {
    res.sendfile('./public/index.html'); // loads the single view file (angular will handle the page changes on the front-end)
  });
};
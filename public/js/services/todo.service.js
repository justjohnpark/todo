// (function() {
//   angular
//     .module('todo')
//     .factory('Todos', Todos)

//   function todoFactory($http) {
//     var factory = {};

//     factory.get = function() {
//       return $http.get('/api/todos');
//     }

//     factory.create = function(todoData) {
//       return $http.post('/api/todos', todoData);
//     }

//     factory.delete = function(id) {
//       return $http.delete('/api/todos/' + id);
//     }

//     return factory;
//   }
// })();

angular.module('todoService', [])

.factory('Todos', function($http) {
  return {
    get : function() {
      return $http.get('/api/todos');
    },
    create : function(todoData) {
      return $http.post('/api/todos', todoData);
    },
    delete : function(id) {
      return $http.delete('/api/todos/' + id);
    }
  }
});
// (function() {
//   angular
//     .module('todoController')
//     .controller('mainController', mainController);

//     function mainController($scope, $http, Todos) {
//       var vm = this;
//       vm.formData = {};

//       Todos.get()
//         .success(function(data) {
//           vm.todos = data;
//         });

//       vm.createTodo = function() {
//         if (!$.isEmptyObject(vm.formData)) {
//           Todos.create(vm.formData)
//             .success(function(data) {
//               vm.formData = {}; // clear form
//               vm.todos = data;
//             });
//         }
//       };

//       vm.deleteTodo = function(id) {
//         Todos.delete(id)
//           .success(function(data) {
//             vm.todos = data;
//           });
//       };
//     }
// })();

angular.module('todoController', [])

.controller('mainController', function($scope, $http, Todos) {
  $scope.formData = {};

  Todos.get()
    .success(function(data) {
      $scope.todos = data;
    });

  $scope.createTodo = function() {
    if (!$.isEmptyObject($scope.formData)) {
      Todos.create($scope.formData)
        .success(function(data) {
          $scope.formData = {}; // clear form
          $scope.todos = data;
        });
    }
  };

  $scope.deleteTodo = function(id) {
    Todos.delete(id)
      .success(function(data) {
        $scope.todos = data;
      });
  };
});
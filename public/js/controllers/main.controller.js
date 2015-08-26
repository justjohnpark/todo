(function() {
  angular
    .module('todo')
    .controller('mainController', mainController);

    function mainController($scope, $http, todoFactory) {
      var vm = this;
      // vm.formData = {};
      // vm.createTodo = createTodo;
      // vm.deleteTodo = deleteTodo;

      // todoFactory.get()
      //   .success(function(data) {
      //     vm.todos = data;
      //   });

      // var createTodo = function() {
      //   if (!$.isEmptyObject(vm.formData)) { //jQuery thing to make sure form data isn't empty
      //     todoFactory.create(vm.formData)
      //       .success(function(data) {
      //         vm.formData = {}; // clear form
      //         vm.todos = data;
      //       });
      //   }
      // };

      // var deleteTodo = function(id) {
      //   todoFactory.delete(id)
      //     .success(function(data) {
      //       vm.todos = data;
      //     });
      // };
    }
})();

// angular.module('todoController', [])

// .controller('mainController', function($scope, $http, Todos) {
//   $scope.formData = {};

//   Todos.get()
//     .success(function(data) {
//       $scope.todos = data;
//     });

//   $scope.createTodo = function() {
//     if (!$.isEmptyObject($scope.formData)) { //jQuery thing to make sure form data isn't empty
//       Todos.create($scope.formData)
//         .success(function(data) {
//           $scope.formData = {}; // clear form
//           $scope.todos = data;
//         });
//     }
//   };

//   $scope.deleteTodo = function(id) {
//     Todos.delete(id)
//       .success(function(data) {
//         $scope.todos = data;
//       });
//   };
// });
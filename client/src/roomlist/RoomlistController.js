angular.module('chatApp').controller('RoomlistController', ["$scope", "socket", "$location", "$routeParams", 
  function ($scope, socket, $location, $routeParams) {

      $scope.errorMessage = '';
      $scope.roomName = '';
      $scope.currentUser = $routeParams.user;
 //     $scope.roomlist = {};

      socket.emit("rooms");
      socket.on("roomlist", function(rooms) {
          $scope.roomlist = rooms;
      });
      
      socket.emit("users");
      socket.on('userlist', function(users) {
          $scope.activeUsers = users;
      });

      $scope.newRoom = function(){
          socket.emit("joinroom", {"room": $scope.roomName});
      };

      $scope.moveToRoom = function(name){
          socket.emit("joinroom", {"room": name}, function (available) {
              if (available) {
                  $location.path("/room/" + $scope.currentUser + "/" + name);
              }
              else {
                  $scope.errorMessage = "Cannot join room";
              }
          });
      };
}]);

angular.module('chatApp').controller('RoomlistController', ["$scope", "socket", "$location", "$routeParams",
  function ($scope, socket, $location, $routeParams) {

      $scope.errorMessage = '';
      $scope.roomName = '';
      $scope.currentUser = $routeParams.user;
 //     $scope.roomlist = {};

      socket.emit("users");
      socket.on("userlist", function(users) {
      $scope.activeUsers = users;
      });

      socket.emit("rooms");
      socket.on("roomlist", function(rooms) {
          $scope.roomlist = rooms;
      });


      $scope.newRoom = function(){
          if($scope.roomName === ""){
              $scope.errorMessage = "You have to choose a room name before you continue!";
          } else {
              socket.emit("joinroom", {"room": $scope.roomName});
          }
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

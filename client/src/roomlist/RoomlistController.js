//routeParams.user er notaði í staðinn fyrir að taka user beint inn
// í  logincontroller senudm við userinn inn með :user og þá er hægt að kalla í hann með route...
angular.module('chatApp').controller('RoomlistController', ["$scope", "socket", "$location", "$routeParams", 
	function ($scope, socket, $location, $routeParams) {

//þegar þessi event kemur frá server viltu þá kalla í þetta function
  socket.on("roomlist", function(rooms) {
    $scope.roomlist = rooms;
  });
  socket.emit("rooms");

  $scope.errorMessage = '';
  $scope.roomName = '';
  $scope.currentUser = $routeParams.user;

  $scope.newRoom = function(){
    socket.emit('joinroom', {'room': $scope.roomName});
  };

  $scope.moveToRoom = function(name){
    socket.emit('joinroom', {'room': name}, function (available) {
      if (available) {
        $location.path('/room/' + $scope.currentUser + '/' + name);
      }
      else {
        $scope.errorMessage = 'Cannot join room';
      }
    });
  };

  socket.on('userlist', function(users) {
    $scope.activeUsers = users;
  });
  socket.emit("users");

}]);

/*angular.module('chatApp').controller('RoomlistController', ["$scope", "socket", "$location", 
	function ($scope, socket, $location) {		
		
		
  	socket.on("roomlist", function(roomlist) { //senda inn fall í socket-ið
			//segja við socket-ið að þegar þessi roomlist event kemur inn, þá á það að kalla á þetta fall
			//erum að senda inn fall sem færibreytu

    		
    		$scope.$apply(function() { //til að uppfæra UI strax

					$scope.roomlist = roomlist; //tek breytuna sem fallið tekur inn og set inn í scopeið

					//console.log(roomlist);
					// til að keyra síðuna og fara síðan í F12 til að skoða objectin sem eru prentuð út
					// þá getum við séð hvernig objectið er sett upp og gert html út frá því - er object sem heitir numParticipants?
				}
  	});

	socket.emit("roomlist");

});*/

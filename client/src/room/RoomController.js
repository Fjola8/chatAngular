angular.module('chatApp').controller('RoomController', ["$scope", "socket", "$location", "$routeParams", 
	function ($scope, socket, $location, $routeParams) {

		$scope.message = ""
		$scope.roomName = $routeParams.roomID;
		$scope.currUser = $routeParams.user;
		$scope.messageHistory = [];
		$scope.currUsers = [];


		socket.emit('joinroom', {'room': $scope.roomName});

		socket.on('updateusers', function(room, users, ops) {
            socket.emit('users');
            socket.emit('rooms');
            socket.emit('getUserChannels');
        });

		socket.on('updatechat', function(room, chatHistory){
			$scope.messageHistory = chatHistory;
		});


		$scope.sendmsg = function() {
 		    socket.emit('sendmsg',{roomName: $scope.roomName, msg:$scope.message});
 		    $scope.message = null; //hreinsa textabox
		};	

		

        $scope.leaveRoom = function(channel) {  
       //    $socket.emit('partroom', channel);       
           $location.path("/roomlist/" + $scope.currUser);       
        };

 }]);




/*angular.module("chatApp").controller("RoomController", 
	function RoomController($scope, $routeParams){
		//RoomController þarf að geta nálgast það hvaða id er í urlinu -> routeParams
		var id = $routeParams.id; 
		//svo í app.js --> .when("/rooms/:id", {..}) - :id og routeParams.id þarf að passa
	});



	{roomName: "the room identifier", msg: "The message itself, only the first 200 chars are considered valid" }
*/

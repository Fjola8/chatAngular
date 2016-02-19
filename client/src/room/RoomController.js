angular.module('chatApp').controller('RoomController', ["$scope", "socket", "$location", "$routeParams",
	function ($scope, socket, $location, $routeParams) {

		$scope.message = "";
		$scope.roomName = $routeParams.room;
		$scope.currUser = $routeParams.user;
		$scope.messageHistory = [];
		$scope.currUsers = [];

		socket.emit('joinroom', {'room': $scope.roomName});


		socket.on('updateusers', function(room, users, ops) {
            socket.emit('users');
            socket.emit('rooms');
            socket.emit('getUserChannels');
			if(room == $scope.roomName){
				$scope.currUsers = users;
			}
    	});

			//messageHistory er til í server
		socket.on('updatechat', function(room, chatHistory){
			if(room == $scope.roomName){
				$scope.messageHistory = chatHistory;
			}
		});

		$scope.sendmsg = function() {
 		    socket.emit('sendmsg',{roomName: $scope.roomName, msg:$scope.message});
 		    $scope.message = null; //hreinsa textabox
		};

        $scope.leaveRoom = function() {
           socket.emit('partroom', $scope.roomName);
           $location.path("/roomlist/" + $scope.currUser);
        };


 }]);

angular.module("chatApp").controller("RoomController", ["$scope", "socket", "$location", "$routeParams",
	function ($scope, socket, $location, $routeParams) {

		$scope.message = "";
		$scope.roomName = $routeParams.room;
		$scope.currUser = $routeParams.user;
		$scope.messageHistory = [];
		$scope.currUsers = [];

		socket.emit("joinroom", {"room": $scope.roomName});


		socket.on("updateusers", function(room, users, ops) {
            socket.emit("users");
            socket.emit("rooms");
            socket.emit("getUserChannels");
			if(room == $scope.roomName){
				$scope.currUsers = users;
			}
    	});

		socket.on("updatechat", function(room, chatHistory) {
			if(room == $scope.roomName) {
				$scope.messageHistory = chatHistory;
			}
		});

		$scope.sendmsg = function() {
 		    socket.emit("sendmsg",{roomName: $scope.roomName, msg:$scope.message});
 		    $scope.message = null; //hreinsa textabox
		};

	    $scope.leaveRoom = function() {
	        socket.emit("partroom", $scope.roomName);
	        $location.path("/roomlist/" + $scope.currUser);
	    };

		$scope.kickUser = function(username) {
			if(username === $scope.currUser) {
				console.log("kicking myself");
			}
			else {
				socket.emit("kick", {"user": username, "room": $scope.roomName}, function (available) {
					if (available) {
		        		console.log(username + " has been kicked out!");
		      		}
	      			else {
	        			console.log(username + " has NOT been kicked out");
	      			}
	    		});
			}
  		};

		socket.on("kicked", function(roomName, user, ops) {
			if($scope.roomName === roomName && $scope.currUser === user) {
      			$location.path("/roomlist/" + $scope.currUser + "/");
    		}
    	});

		$scope.banUser = function(username) {
			if(username === $scope.currUser) {
				console.log("ban myself");
			}
			else {
				socket.emit("ban", {"user": username, "room": $scope.roomName}, function (available) {
					if (available) {
		        		console.log(username + " has been banned from " + $scope.roomName);
		      		}
		      		else {
		        		console.log(username + " has NOT been banned!");
		      		}
				});
			}
		};

		socket.on("banned", function(roomName, user, ops) {
			if($scope.roomName === roomName && $scope.currUser === user) {
	      		$location.path("/roomlist/" + $scope.currUser + "/");
	    	}
		});

		$scope.logOut = function() {
            socket.emit("disconnectNow");
            $location.path("/login");
        };
 }]);

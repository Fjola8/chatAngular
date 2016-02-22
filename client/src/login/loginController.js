angular.module("chatApp").controller("LoginController", ["$scope", "socket", "$location", "$rootScope", "$routeParams",
	function ($scope, socket, $location, $rootScope, $routeParams) {

		$scope.user = "";
		$scope.errorMessage = "";


		$scope.onLogin = function onLogin() {
            if($scope.user === "") {
                $scope.errorMessage = "You have to choose a name before you continue!";
            } else {
		        socket.emit("adduser", $scope.user, function(success, error) {
			        if (success) {
                        $location.path("/roomlist/" + $scope.user);
                    } else {
                        $scope.errorMessage = "This username is already taken!";
                    }
		        });
            }
		};
	}]);

"use strict";

angular.module("chatApp").controller("LoginController", ["$scope", "socket", "$location", "$rootScope", "$routeParams",
	function ($scope, socket, $location, $rootScope, $routeParams) {
	// ChatResource  //BÆTA VIÐ $location Á MILLI
		//Angular fattar að þessi controller þarf eitthvað sem heitir chatResource
		//og býr til instance af því fyrir okkur og sendir það þarna inn
		//í staðinn fyrir að við gerum svona:  var resource = new ChatResource();
		//nú gerum við ráð fyrir að við erum með object sem heitri ChatReesource
		
		$scope.user = "";
		$scope.errorMessage = "";


		$scope.onLogin = function onLogin()
        {
            if($scope.user === "")
            {
                $scope.errorMessage = "You have to choose a name before you continue!";
            }
            else
            {
		        socket.emit("adduser", $scope.user, function(success, error)
                {
			        if (success)
                    {
                        $location.path("/roomlist/" + $scope.user);
                    } 
                    else 
                    {
                        $scope.errorMessage = "This username is already taken!";
                    }
                
		        });
            }

		};

	}]);
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

		$scope.onLogin = function onLogin(){

		socket.emit("adduser", $scope.user, function(success, error){

			if (success) 
                {
                  //  $rootScope.user = user;
                  //  $location.path("/roomlist/" + $scope.user);
                    console.log("Hallo");
                } 
                else 
                {
                    $scope.errorMessage = "This username is already taken!";
                }

		});

		};

	}]);
"use strict";

angular.module("chatApp").controller("LoginController", 
	function LoginController($scope){ // ChatResource  //BÆTA VIÐ $location Á MILLI
		//Angular fattar að þessi controller þarf eitthvað sem heitir chatResource
		//og býr til instance af því fyrir okkur og sendir það þarna inn
		//í staðinn fyrir að við gerum svona:  var resource = new ChatResource();
		//nú gerum við ráð fyrir að við erum með object sem heitri ChatReesource
		
		$scope.user = "";
		$scope.errorMessage = "";

		$scope.onLogin = function onLogin(){
			//kallar í þetta funciton þegar það kemur til baka svar

			var socket = io.connect('http://localhost:8080');
				socket.emit("adduser", $scope.user, function(available){					
					$scope.available = available;
					$scope.$apply();
			});
	/*		ChatResource.login($scope.user,function(success){
				if(!success) {
					$scope.errorMessage = " Login failed"
				}
				else {
					//TODO: Senda notandann á herbergjalistann
					//$location("/roomlist"); kannski #/roomlist
				}
			})*/

		};

	});
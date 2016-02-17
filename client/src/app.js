"user strict";

//["ui.bootstrap"]
 //hvaða url er hægt að nota í vafranum í þessu forriti, td /rooms
 //KANNSKI Á ÞETTA AÐ VERA --> ('chatApp', [require('angular-route')])

angular.module("chatApp", ["ngRoute"]).config(["$routeProvider",
	function($routeProvider){

	$routeProvider
	.when("/login", { 
		templateUrl: "src/login/login.html",
		controller: "LoginController"
	})
	.when("/roomlist/:user", { 
		templateUrl: "src/roomlist/roomlist.html",
		controller: "RoomlistController"
	})
	.when("/room/:user/:ID", { 
		templateUrl: "src/room/room.html",
		controller: "RoomController"
	})
	.otherwise({
		redirectTo: "/login"
	});
}])  
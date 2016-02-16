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
	.otherwise({
		redirectTo: "/login"
	});
}])  
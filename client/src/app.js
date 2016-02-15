"user strict";
//["ui.bootstrap"]
 //hvaða url er hægt að nota í vafranum í þessu forriti, td /rooms
angular.module("chatApp",[]).config(function($routeProvider){
	$routeProvider.when("/", {
		templateUrl: "src/login/login.html",
		controller: "LoginController"
	}).when("rooms". {
		templateUrl: "src/roomList/roomlist/roomlist.html",
		controller: "RoomlistController"
	});
	/*.otherwise({
		redirectTo: "/login"
	}); - ef notandi td slær einhverja bull tölu -> index
	*/
})  
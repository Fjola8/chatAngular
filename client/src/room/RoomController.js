
angular.module("chatApp").controller("RoomController", 
	function RoomController($scope, $routeParams){
		//RoomController þarf að geta nálgast það hvaða id er í urlinu -> routeParams
		var id = $routeParams.id; 
		//svo í app.js --> .when("/rooms/:id", {..}) - :id og routeParams.id þarf að passa
	});


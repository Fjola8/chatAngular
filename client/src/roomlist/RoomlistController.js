//angular.module("chatApp").controller("RoomlistController", 
//	function RoomlistController($scope, socket){

angular.module('chatApp').controller('RoomlistController', ["$scope", "socket", "$location", 
	function ($scope, socket, $location) {		
		
		
  	socket.on("roomlist", function(roomlist) { //senda inn fall í socket-ið
			//segja við socket-ið að þegar þessi roomlist event kemur inn, þá á það að kalla á þetta fall
			//erum að senda inn fall sem færibreytu

    		
    		$scope.$apply(function() { //til að uppfæra UI strax

					$scope.roomlist = roomlist; //tek breytuna sem fallið tekur inn og set inn í scopeið

					//console.log(roomlist);
					// til að keyra síðuna og fara síðan í F12 til að skoða objectin sem eru prentuð út
					// þá getum við séð hvernig objectið er sett upp og gert html út frá því - er object sem heitir numParticipants?
				}
  	});

	socket.emit("roomlist");

});

angular.module("chatApp").controller("RoomlistController", 
	function RoomlistController(){
		//þarf að eiga lista af gögnum - þurfum að sækja hann frá bakenda
		$scope.roomlist = [ {
			name: "spjall",
			id: 1
		},
		{
			name: "fjola",
			id: 2
		}];
	})
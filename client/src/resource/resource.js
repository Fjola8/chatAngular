"use strict";

angular.module("chatApp").factory("ChatResource", 
	function ChatResource(){ //lýsa yfir því objecti sem þetta resource er
		return {			//interface-ið á því að tala við bakenda
			login: function login(user, callback){ //þau föll í bakendanum sem við ætlum að geta kallað inn
				//TODO: útfærsla 
				//senda upplýsingar yfir á socket.io server að þessi notandi vilji add sér við chattið
			},

			getRoomList: function getRoomList(callback){ //annaðhvort að láta fallið skila objecti eða gera callback
				//TODO: verður kallað í callback þegar gögnin eru komin 
			},

			//Höldum svo áfram að skrifa öll þau föll sem við ætlum að kalla í
			//í þessum controller eða öðrum - þau tala við bakendann og gera það sem þarf
		}
	})
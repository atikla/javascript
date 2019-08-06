/* global console , alert */ 

var myDiv = document.getElementById("test"),
	myInput = document.getElementById("input"),
	mycurrency = document.getElementById("new");
/*
	myDiv.onmouseover = function (){
			"use strict"; 

			myDiv.innerHTML = " You Hovered On Me "
	};
*/

/*
	myDiv.onmouseout = function (){
			"use strict"; 

			myDiv.innerHTML = " You Have Gone "
	};
*/
mycurrency.onchange = function () {

	myDiv.innerHTML = " Worth " + myInput.value * mycurrency.value+"SYP" ;


};

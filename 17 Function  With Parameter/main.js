/* global console , alert */ 
function myAgeInDays(myAge){

	"use strict";

	return myAge * 365 ; 
}

var dynamicAge = prompt("whats your name ?");
var daysCalc = myAgeInDays(dynamicAge);
document.getElementById("test").innerHTML =
	"Your Age In Days = " + daysCalc +" Days"
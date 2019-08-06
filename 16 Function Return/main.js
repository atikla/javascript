/* global console , alert */ 

function myInfo(){

	"use strict";

	var myName = "laith",
		myAge = 23; 

	return myAge ; 
	//with out the return the defult value is undefined

}
function myAgeInDays(){

	"use strict"

	var myAge = 23 ; 

	return myAge * 365 ; 
}

function myAgeInHours(){

	"use strict"

	var myAge = 23 ; 

	return myAge * 365 * 24 ; 
}
var daysCalc = myAgeInDays(),
	hoursCalc = myAgeInHours();

document.getElementById("test").innerHTML =
	"My Age In Days Is Equal To "+ daysCalc+ " Days";
document.getElementById("test2").innerHTML = 
	"My Age In hours Is Equal To "+ hoursCalc+ " hours";
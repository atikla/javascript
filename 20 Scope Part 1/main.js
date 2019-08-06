/* global console , alert */ 

var myName = "laith"; // Global Scope
console.log(myName);
function myNameFunc(){

	"use strict";
	var myName = "omar"; //Local Scope 
	console.log(myName);

}
myNameFunc();
/* global console , alert , isNaN*/ 

// self invoke start with ( and end with ) after the (); 
/* 
(function saywelcome(){

	"use strict " ;
	alert("Welcome To My Website");

})();

function convertUsdToRiyal(){

	"use strict";
	var amount = document.getElementById("test").innerHTML;
	return alert(amount * 3.75);
}
*/ 
function convertUsd(){

	"use strict"

 	var amount = document.getElementById("dollar").value,
 		result = amount * 3.75 ,
 		message = document.getElementById("message") ;
	 

	 if(amount === ""){

	 	message.innerHTML = "this field can't Be empty";

	 }else if (isNaN(amount)){

	 	message.innerHTML = "this field accept numbers only ";

	 }else if (amount === "0" || amount < 0 ){

	 	message.innerHTML = "this value Must not be 0 or smaller than 0" 

	 }else{

	 	message.innerHTML = amount + " Dollae Is worth " + result + "Riyal";
	 }
}


 
/* global console , alert */ 
 var yourAge = prompt ("what is your age "); 
 if (yourAge < 18 ){

 	document.getElementById("test").innerHTML = 
 		
 		"Sorry Your Age is "+yourAge+" You Are Not Allowed Here" ;
 
 }else{

 	document.getElementById("test").innerHTML = 
 		
 		"Hello Your Age is "+yourAge+" You Are Allowed Here" ;

 }

 /* 
 if (condition){
	//code 
 }
 
 if (ticketPrice < 1500){
 	console.log("yes it is cheap "); // Display Message That Its Cheap 
 }else if (ticketPrice == 1500){
 	console.log("yes it is normal"); // Display Message That Its Normal 
 }else {
 	console.log("no it is expensive") // Display Message That Its Expensive
 }
 */
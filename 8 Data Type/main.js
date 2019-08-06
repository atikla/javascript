/* global console , alert */ 

/* 	
	Boolean : true , false 
	array : ["facebook.com", "google.com" , "youttube.com"]
	object : {firstname: "laith" , lastName : "atik"} 
	String : "javascript" 
	Number : 
	undefined : 
	Null 
	NaN = not a number 
	Symbol 

*/
/* 
	check if the product has discount or not 
	true = yes has discount
	false = no is has not discount 
*/
var mainPrice = 450 ,
hasDiscount = true ; 
if (hasDiscount){
	var mainPrice = 350 ; // if has a discount 
} else {
	var mainPrice = 450 ; // if has not discount 
}
document.getElementById("boolean_test").innerHTML = mainPrice ; 

var socialWebSites = ["facebook.com", "google.com" , "youttube.com"];
document.getElementById("array _test").innerHTML = socialWebSites[0]; 

var myInfo = {firstName: "laith" , lastName: "atik"} ; 
document.getElementById("object_test").innerHTML  = myInfo.firstName +" "+ myInfo.lastName ;

var myName = ' laith "atik"';
document.getElementById("string_test").innerHTML = myName;

var myAge = 23 ; // 23 is not "23" 
document.getElementById("number_test").innerHTML = myAge ;
var myNewValue ; 
document.getElementById("undefined_test").innerHTML = myNewValue ;

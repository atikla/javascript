/* global console , alert */ 

/*
	charAt(index);
	charCodeAt(index);
	replace(value , newValue);
*/

var myString = "I Love JavaScript Too Much",
	myCharCode = myString.charCodeAt(2),
	myChar = myString.charAt(2),
	myReplaceString = myString.replace("JavaScript" , "HTML");

console.log(myString);
console.log(myCharCode);
console.log(myChar);
console.log(myReplaceString);
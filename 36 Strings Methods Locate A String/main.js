/* global console , alert */ 
/* 
	Syntax : indexOf( Value , Start Position); default = 0 
	Syntax : lastIndexOf( Value , Start Position); default = 0 
	Syntax : search (value)
*/
var myString = "I'm In Love With JavaScript Love",
	myWord = myString.indexOf("Love" , 0 ),
	myNewWord = myString.lastIndexOf("Love", myString.length);
	myNewWord1 = myString.search("Love");
//console.log(myString.length);
console.log(myWord);
console.log(myNewWord);
console.log(myNewWord1);

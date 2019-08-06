/* global console , alert */ 

/*
	new Date(); // Print Current Date & Time

	new Date(Millseconds 5000 = 5 Seconds);
	 //Print Millseconds From UTC 1 Jan 1970 00:00:00
	
	new Date(DateString[Month Day , Year Hour:Minutes:Seconds]) ; // Can Add Date String
	// Date 7 Argument
	// Month Value Starts From 0 
	new Date(Year , Month , Day,Hour , Minutes , Seconds , Millseconds)

*/

var theDate1 = new Date();
var theDate2 = new Date(10000); // 10 Seconds
var theDate3 = new Date("March ,14 , 1995 00:00:00");
var theDate4 = new Date(1995,02,14,00,00,00,00);

console.log(theDate1);
console.log(theDate2);
console.log(theDate3);
console.log(theDate4);
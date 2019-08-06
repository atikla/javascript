/* global console , alert */ 

/*   
	getDate // Day Of the Month 1-31
	getDay //  Day Of The Week 0-6
	getFullYear // Gets The Full Year 
	getHours() // Gets Hours 0-11
	getMinutes()// Gets Minutes 0-59
	getSeconds() // Gets Seconds 0-59
	getMilliseconds() // Gets Milliseconds 0-999
	getTime() // Number Of Milliseconds From 1970 or Specific Date
	getTimeZoneOffset() // Get Def Between UTC & Your Localtime in Minutes
	//if we put after get "UTC" Word it Will Get The Time In The UTC 
*/

var myDate = new Date(),
	theMonth = myDate.getDate(),
	theWeek  = myDate.getDay(),
	theYear  = myDate.getFullYear(),
	theHours = myDate.getHours(),
	theMinutes = myDate.getMinutes(),
	theSeconds = myDate.getSeconds(),
	theMilliseconds = myDate.getMilliseconds(),
	theTime = myDate.getTime(),
	theLocalTime = myDate.getTimezoneOffset();


console.log(myDate);
console.log(theMonth);
console.log(theWeek);
console.log(theYear);
console.log(theHours);
console.log(theMinutes);
console.log(theSeconds);
console.log(theMilliseconds);
console.log(theTime);
console.log(theLocalTime);
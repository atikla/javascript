/* global console , alert */ 


/*
	
	mow();
	parse(); can give yo the sum of milliseconds from spicific Date to our current date 
	toISOString() ; That Is Can Convert Any Date In the long States to ISO Shape
		YYYY-MM-DD hh:mm:ss
	toDateString();
	toTimeString();
*/

var theDate = new Date(),
	now = Date.now(),
	min = 1000 * 60 ,
	hour = min * 60 ,
	day = hour * 24 ,
	month = day * 30 ,
	years = month * 12;
console.log( "the Date Now Is "+theDate);
console.log( "the sum of min from 1970 is "+now/min);
console.log( "the sum of hour from 1970 is "+now/hour);
console.log( "the sum of day from 1970 is "+now/day);
console.log( "the sum of month from 1970 is "+now/month);
console.log( "the sum of years from 1970 is "+now/years);
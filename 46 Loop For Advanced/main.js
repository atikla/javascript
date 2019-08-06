/* global console , alert */

var i = 0  ; 
/*
for (i = 0 ;i <= 10; i++){

	console.log(i);

}
*/
for (;;){

	if(i > 10) break ; 

	console.log(i);

	i++


}

function generateYears(Start , End){

	"use strict" ; 

	var years ; 
	document.write("<select>");
	for(years = Start ; years <= End ; years++){

		document.write("<option value=\""+years+"\">"+years+"</option>");

	}


	document.write("</select>");

}

generateYears(1900 , 2010);
generateYears(1950 , 2016);
generateYears(2000 , 2018);
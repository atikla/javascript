/* global console , alert */

/* 
	syntax : split(Separator , limit);
	Syntax : slice (Start [Mandatory] , End [Optional]);
	Syntax : substr (Start , Length) ; 
*/

var myMainString = "I Love JavaScript And JSON",
	mySplitedString = myMainString.split(" " , 3 ),
	mySlicedString = myMainString.slice(0,4),
	mySubstrString = myMainString.substr(7 , 10);
console.log(myMainString);
console.log(mySplitedString);
console.log(mySlicedString);

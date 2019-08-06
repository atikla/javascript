/* global console , alert */ 

/* 
	Regular Expression Syntax ; 
	/Pattern/attributes
	search | Replace | Match | Siplt | Test
	Attributes List 
	[ i ] => case Insensitive 
	[ g ] => Global Search 
	[ m ] => Multi Line Search 

*/

var String1 = "I lovle JavLaScLript",
	result = String1.replace(/L/gi , "@");
console.log(result);
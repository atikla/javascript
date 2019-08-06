
/* global console , alert */ 

/* 
	Regular Expression Syntax ; 
		/Pattern/attributes
		search | Replace | Match | Siplt | Test
		Attributes List 
		[ i ] => case Insensitive 
		[ g ] => Global Search 
		[ m ] => Multi Line Search
	------------------------------
	Brackets Use
		 [...]   Character
		 [^...]  Not Character
		 [] Range
		 [a-e] Range Small Letters 
		 [A-z] Range Capital Letters
		 [0-9] Range Numners
		 [^] Not Range
		 [^a-e] Not Range Small Letters
		 [^A-z] Not Range Capital Letters
		 [^0-9] Not Range Numners
		 [A-g] = Range [A-Z] and Range [a-g]
		 [0-9a-z] Double Range



*/

var String1 = "I lovle JavLaScLript",
	String2 = "1234567890abcdefgABCDEFG"
	result = String1.replace(/[e]/gi , "@");
	result1 = String1.replace(/[^e]/gi , "@");
	result2 = String1.replace(/[a-e]/gi , "@");
	result3 = String2.replace(/[0-9a-z]/g , "$");
console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);
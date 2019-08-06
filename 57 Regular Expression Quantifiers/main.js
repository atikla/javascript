
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
	 -------------------------------
	 Quantifiers 
	 	Letter+ => Word Contain One Letter
	 	Letter{Number} =>  Word Contain Numner Of Letter
	 	Letter{Number , Number} Word Contain Number or Number
	 	Letter{Number,} Word Contain At Least Number



*/

var String1 = "Ie loveele JaveeeaSceript",
	result = String1.replace(/e+/gi , "@");
	result2 = String1.replace(/e{2}/gi , "@");
	result3 = String1.replace(/e{2,3}/gi , "@");
	result4 = String1.replace(/e{2,}/gi , "@");
console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);

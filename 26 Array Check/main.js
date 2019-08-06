/* global console , alert */ 

/*
	 Array Check if Array or not 
*/

var new1friend = ["laith","omar","ahmet","adnan","mohammad"];

console.log(new1friend[0]);

if (Array.isArray(new1friend)){

		console.log("Good This Is An Array");

	}	else if (new1friend.constructor === Array){

		console.log("Good This Is An Array");

	}else{
		console.log("This Is Not An Array");
	}
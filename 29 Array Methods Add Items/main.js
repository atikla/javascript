/* global console , alert */ 
var friend = [
	"laith",
	"omar",
	"ahmet",
	"adnan",
	"mohamad"
]

console.log(friend);

console.log(friend.length);

friend [5] = "Emad"; 

console.log(friend.length);

console.log(friend);

friend.push("hussam");

console.log(friend.length);

console.log(friend);

friend.unshift("Ayman");

console.log(friend.length);

console.log(friend);
/*
	arrayName.splice(index , How Many , Item1 ,Item2 ,Item3);
*/

friend.splice(3,0,"salih");

console.log(friend);

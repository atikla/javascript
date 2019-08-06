/* global console , alert */ 

var friend = ["laith","omar","ahmet","adnan","mohamad"];

console.log(friend);
/* 
	slice(Start , End )
*/
var mySlicedArray = friend.slice(2);

console.log(mySlicedArray);

var otherFriend = ["saleh","mooaz","Norain"];

var allFriend = friend.concat(otherFriend);

console.log(allFriend);
/* global console , alert */ 

/* 
	indexOf( Value To Search , Starting Index ); To Down 
	lastIndexOf( Value To Search , Starting Index ); To Up 
*/
var friend = ["laith","omar","ahmet","adnan","mohamad"];

console.log(friend);

var specialFriend = friend.indexOf("adnan");

console.log(specialFriend);
document.getElementById("all").innerHTML =  "My friend are :" + friend;
document.getElementById("specail").innerHTML = 
		 "My specail friend is  :" + friend[specialFriend];
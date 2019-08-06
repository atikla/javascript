/* global console , alert */ 

var myCar = {
	colour : "Black",
	type : "KIA",
	price : "50.000",
	Model : "2017"
}
console.log(myCar.price);
/*
	for/In Loop Syntax

	for(Varibale In Object){

		if (Object.hasOwnProperty(Varibale)){

			//stetmen 
	}
	
*/
var prop
for (prop in myCar){
	
	if (myCar.hasOwnProperty(prop)){

		console.log(prop + ": " +myCar[prop]);
	}
	
}

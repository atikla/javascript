/* golbal console , alert */
/*
	start with letters , underscore , $,
	can not start with number , 
	var = javaScript varible keyword 

	myprice = varible name 
	(=) = assignment operator
	100 = varible value 


*/
//var myPrice ; // Undfined 
var // My Product Prices 
    myOldPrice = 1000, 
    myNewPrice = 900,
    myDiscount = myOldPrice - myNewPrice // 1000 - 900 = 100

document.getElementById("price").innerHTML = myDiscount;

var 
	mainPrice = 500,
	mySmallDiscount = 50,
	myMediumDiscount = 100,
	myBigDiscount = 200;

document.getElementById("price1").innerHTML = mainPrice; 
document.getElementById("product1").innerHTML = mainPrice - mySmallDiscount;
document.getElementById("product2").innerHTML =  mainPrice - myMediumDiscount;
document.getElementById("product3").innerHTML = mainPrice - myBigDiscount;

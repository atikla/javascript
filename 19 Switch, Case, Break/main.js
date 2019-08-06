/* global console , alert  , prompt*/ 

/* 
	switch (expression){
	case x :
		code to Exceute;
		break ; 
	case y :
		code to Exceute;
		break ; 
	case z :
		code to Exceute;
		break ;
	default:
		code to Exceute;
		break; 
}
*/
var season = prompt("Whats The Best Season For you ? ");

switch (season){

	case "winter":
		alert("Winter Is Too Cold");
		break;
	case "Summer":
		alert("Summer Is Too Hot");
		break;
	case "Autumn":
		alert("Autumn Is Very Good");
		break;
	case "Spring":
		alert("Spring Is Amazing");
		break;
	default:
		alert("You Did'nt Enter A Season Name");


}
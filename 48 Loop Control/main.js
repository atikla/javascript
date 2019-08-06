/* global console , alert */ 

var i ,x ; 

MainLoop :

for( i = 1 ; i < 5 ; i++){

		ChildLoop:

		for (x = 15 ; x < 20 ; x++){

			if (x === 17){

				break ChildLoop ;

			}

			console.log(i + "=>"+x);

		}
}
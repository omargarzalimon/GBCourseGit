$("#headingOne").click(function(){
	
	$("#headingOne").addClass("blackBack");
	$("#headingTwo").removeClass("blackBack");
	$("#headingThree").removeClass("blackBack");
	$("#headingOne button span").addClass( "greenText" );
	$("#headingTwo button span" ).removeClass( "greenText" );
	$("#headingThree button span" ).removeClass( "greenText" );
});

$("#headingTwo").click(function(){
	$("#headingTwo").addClass("blackBack");
	$("#headingOne").removeClass("blackBack");
	$("#headingThree").removeClass("blackBack");
	$("#headingTwo button span").addClass( "greenText" );
	$("#headingOne button span" ).removeClass( "greenText" );
	$("#headingThree button span" ).removeClass( "greenText" );
});

$("#headingThree").click(function(){
	$("#headingThree").addClass("blackBack");
	$("#headingOne").removeClass("blackBack");
	$("#headingTwo").removeClass("blackBack");
	$("#headingThree button span").addClass( "greenText" );
	$("#headingOne button span" ).removeClass( "greenText" );
	$("#headingTwo button span" ).removeClass( "greenText" );
});


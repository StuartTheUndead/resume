/*
This is empty on purpose! Your code to build the resume will go here.
 */
var name = "Mario Tabarini";
var role = "Web Developer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").append(formattedName);
$("#header").append(formattedRole);

/*$(document).ready(function() {
 	
 	$('#main').append('Mario');
 	var light = 299792458;
 	var meter = 100;
 	var second = 1.0/1000000000;
 	var result = (light * meter) / second;
 	$('#main').append(result);
 	
 });
*/

/*
var awesomeThoughts = "I am Stuardo and I am awesome";
var funThoughts = awesomeThoughts.replace("awesome", "fun");
console.log(awesomeThoughts);
$('#main').append(funThoughts); */

/*
This is empty on purpose! Your code to build the resume will go here.
 */
var name = "Mario Tabarini";
var role = "Web Developer";
var email = "stuardomerida@gmail.com";
var welcome = "Hello, welcome to the site!";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
var formattedEmail = HTMLemail.replace("%data%", email);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", welcome);
var skills = ["Programming", "Writing", "Cooking", "Dancing"]
/*
$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#main").append(skills);
$("#main").append(skills[0]);
$("#main").append(skills.length);
*/
var bio = {
	"name" : formattedName,
	"role" : formattedRole,
	"contact" : formattedEmail,
	"picture" : HTMLbioPic,
	"welcome" : formattedWelcomeMsg,
	"skills" : skills,
};
$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contact);
$("#main").append(bio.picture);
$("#main").append(bio.welcome);
$("#main").append(bio.skills);
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

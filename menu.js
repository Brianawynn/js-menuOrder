// begin with a blank/new order
var order = '';


// build a function to ask questions
var mainFood = prompt("Would you like a taco, burrito, or a bowl");

var l = 'lettuce';
var t = 'tomato';
var r = 'rice';
var s = 'salsa';

function question(questionText) {
  var ansInput = prompt(questionText);
  // your code goes here
   order = order + ansInput;
} 





order = mainFood+ " with ";
// call the QUESTION function with the order options
question("What type of meat would you like?");
 
question("Would you like lettuce?");
 
question("Would you like tomato?");
 
question("Would you like rice?");
 
question("Would you like salsa");
 

// output their order
document.write("<p>You ordered: " + order + "<p>");

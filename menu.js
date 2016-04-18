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
     if (ansInput.toUpperCase === no){
     order = order;
   }
    order = order + ""+ ansInput;
} 

order = mainFood+ " with ";
// call the QUESTION function with the order options
question("What type of meat would you like?");
 
question("Would you like lettuce or spinach?");
 
question("Would you like brown rice or white rice?");
 
question("Would you like green salsa or red salsa");
 

// output their order
document.write("<p>You ordered: " + order + "<p>");

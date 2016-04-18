// begin with a blank/new order
var order = '';


// build a function to ask questions
var mainFood = prompt("Would you like a taco, burrito, or a bowl");

function question(questionText,) {
  var ansInput = prompt(questionText);
  // your code goes here
} 


order = mainFood+ " with ";
// call the QUESTION function with the order options
question("What type of meat would you like?");
 order = order + ansInput;
question("Would you like lettuce?");
 order = order + ansInput;
question("Would you like tomato?");
 order = order + ansInput;
question("Would you like rice?");
 order = order + ansInput;
question("Would you like salsa");
 order = order + ansInput;

// output their order
document.write("<p>You ordered: " + order + "<p>");

// begin with a blank/new order
var order = '';


// build a function to ask questions
var mainFood = prompt("Would you like a taco, burrito, or a bowl");

var l = 'lettuce';
var t = 'tomato';
var r = 'rice';
var s = 'salsa';
var [] question = ["What type of meat would you like?", "Would you like lettuce or spinach?", "Would you like brown or white rice", Would you like green or red salsa?];

function question(questionText) {
  var ansInput = prompt(questionText);
  // your code goes here
    order = order + ""+ ansInput + "";
} 
// for ( int i = 0; i< 4; i++){
//   question [i] = ansInput;
// }
// while ( i < question.length){
//   order = mainFood + " with " + question[i];
  
// }
order = mainFood+ " with ";
// call the QUESTION function with the order options
question(question);
// question("What type of meat would you like?");

// question("Would you like lettuce or spinach?");
 
// question("Would you like brown rice or white rice?");
 
// question("Would you like green salsa or red salsa");
 

// output their order
document.write("<p>You ordered: " + order + "<p>");

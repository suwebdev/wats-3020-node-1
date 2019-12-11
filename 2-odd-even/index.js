/*
The user should run this from the root of the project using `node 1-odd-even/index.js <integer> and should see the word odd or even depending on the integer.  If an integer is not provide, the user should see a usage statement reminding them of the how to run this code.
*/

// get an integer using getargs
let getargs = require("../modules/getargs/index.js");
let input = getargs.getIntegerArg();

/**** Do not modify anything above this line ****/

// test that input is a number
// TODO use the if statement to check input using isNaN and NOT Number.isInteger 
if () {
  // TODO use console.log to provide a usage statement when user forgets to enter a number
} else {
  // TODO use the if statement to test if integer is divisible by 2
  if () {
    //TODO use console.log with a template literal to report that the number is even

  } else {
    //TODO use console.log with a template literal to report that the number is odd
  }
}

// exit the program
process.exit()
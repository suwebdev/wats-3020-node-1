/*
The user should run this from the root of the project using `node 1-odd-even/index.js <integer> and should see the word odd or even depending on the integer.  If an integer is not provide, the user should see a usage statement reminding them of the how to run this code.
*/

// get input using getargs
let getargs = require("../modules/getargs/index.js")
let input = getargs.getStringArg()

/**** Do not modify anything above this line ****/

// make sure that the user entered a string
if (!input) {
  //TODO use console.log to add a usage statement and let the user know that if a string contains a space it must be quoted
} 

// check to see if string contains hello
// if it does report back the position in the string where it begins

else {
  // TODO write a logical expression to test if the input contains a "hello"
  if () {
    // use console.log and a template literal at what position the hello was found
  } else {
    // use console.log to indicate that the hello was not found
  }
}

// exit the program
process.exit()
/*
The user should run this from the root of the project using `node 1-odd-even/index.js <integer> and
should see the word odd or even depending on the integer.  If an integer is not provide, the user should see
a usage statement reminding them of the how to run this code.
*/
// TODO import the getargs module
let getargs = require("../modules/getargs/index.js")

let input = getargs.getStringArg()

// make sure that the user entered a string
if (!input) {
  //TODO add a usage statement and let the user know that if a string contains a space it must be quoted
} 

// check to see if string contains hello
// if it does report back the position in the string where it begins

else {
  // TODO write a logical expression to test if the input contains a "hello"
  if (){
    // log using a template literal at what position the hello was found
    console.log()
  } else {
    // log that the hello was not found
    console.log()
  }
}
process.exit()
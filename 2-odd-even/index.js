/*
The user should run this from the root of the project using `node 1-odd-even/index.js <integer> and
should see the word odd or even depending on the integer.  If an integer is not provide, the user should see
a usage statement reminding them of the how to run this code.
*/
let getargs = require("../modules/getargs/index.js")

// get an integer using getargs
let input = getargs.getIntegerArg()
// test that input is a number

// TODO check input using isNaN and NOT Number.isInteger 
if () {
  // TODO provide a usage statement when user forgets to enter a number
  console.log()
} else {
  // TODO test if integer is divisible by 2
  if () {
    //TODO use a template literal to report that the number is even
    console.log()
  } else {
    //TODO use a template literal to report that the number is odd
    console.log()
  }
}
// exit the program
process.exit()
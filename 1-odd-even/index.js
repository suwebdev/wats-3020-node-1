/*
The user should run this from the root of the project using `node 1-odd-even/index.js <integer> and
should see the word odd or even depending on the integer.  If an integer is not provide, the user should see
a usage statement reminding them of the how to run this code.
*/
let getargs = require("../modules/getargs/index.js")

// get an integer using getargs
let input = getargs.getIntegerArg()
// test that input is a number

 
if (isNaN(input) || !Number.isInteger(input)) {
  // TODO provide a usage statement when user forgets to enter a number
  console.log("usage: node 1-odd-even/index.js <integer>")
} else {
  if (input % 2 === 0) {
    console.log(`${input} is even`)
  } else {
    console.log(`${input} is odd`)
  }
}
// exit the program
process.exit()
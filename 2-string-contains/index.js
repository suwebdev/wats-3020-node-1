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
  console.log("usage: node 2-string-contains/index.js <string>")
  console.log("if string contains a space, put it in quotes")
}

// check to see if string contains hello
// if it does report back the position in the string where it begins
else {
  // TODO write a logical expression to test if the input contains a "hello"
  if (input.indexOf("hello") > -1) {
    // log using a template literal at what position the hello was found
    console.log(`input contains hello at location ${input.indexOf("hello")}`)
  } else {
    // log that the hello was not found
    console.log(`input does not contain the string "hello"`)
  }
}
process.exit()
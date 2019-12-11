/*
This app will convert minutes to hours and minutes.  If no integer is supplied, a usage message will be logged.  If an integer is supplied, the hours are calculated using the division operator `/` and the minutes are calculated using the modulo `%` operator. In addition the pluarality of the units (hour/hours and minute/minutes) are calculated based on the value of the hours or minutes.
*/

// get an integer using getargs
let getargs = require("../modules/getargs/index.js");
let input = getargs.getIntegerArg();

/**** Do not modify anything above this line ****/

// test that input is a number
// TODO check input using isNaN and NOT Number.isInteger 
if () {
  // TODO use console.log to provide a usage statement when user forgets to enter a number
} else {
  // TODO: create a variable named hours and calculate the whole number of hours using the / operator and .toFixed
  // TODO: create a variable named minutes and calculate the number of minutes using the % (modulo) operator
  // TODO: create a variable named hrs and use a ternary expression to determine whether there are singular or plural hours
  // TODO: create a variable named mins and use a ternary expression to determine whether there are singular ot plural minutes
  console.log(`${input} minutes is ${hours} ${hrs} ${minutes} ${mins} `)
}

process.exit()
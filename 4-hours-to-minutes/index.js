let getargs = require("../modules/getargs/index.js")

let input = getargs.getIntegerArg()

// test that input is a number
if (isNaN(input) || !Number.isInteger(input)) {
  console.log("usage: node 4-hours-to-minutes/index.js <integer>")
} else {
  let hours = (input/60).toFixed(0)
  let minutes = input % 60
  let hrs = hours > 1 ? "hours" : "hour"
  let mins = minutes > 1 ? "minutes" : "minute"
  console.log(`${input} minutes is ${hours} ${hrs} ${minutes} ${mins} `)
}

process.exit()
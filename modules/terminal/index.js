exports.print = function(msg){
  process.stdout.write(`${msg}`);
}

exports.terminal = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
// Snek Server IP: 135.23.223.133
// Snek Port: 50542
const stdin = process.stdin;
const {connect} = require("./client");
const { setupInput } = require("./input");

const net = require("net");



console.log("Connecting ...");
connect();

setupInput();
// setup interface to handle user input from stdin

// const setupInput = function () {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();
//   return stdin;
// };

// const handleUserInput = function (data) {
//   // your code here
//   console.log(data)
//   if (data === '\u0003') {
//     console.log('Shutting down')
//     process.exit();
//   }
//   // if (data === 'w') {
//   //   connect.write()
//   // }
//   // return data
// };


// setupInput();
// stdin.on("data", handleUserInput);

// ^[[B^[[A^[[A^[[D^[[C^[[B^[[D^[[A^[[D^[[C^[[A^[[D^[[B^[[C^[[A^[[D

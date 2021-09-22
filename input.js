const stdin = process.stdin;

let connection;

// const setupInput = (conn) => {
//   connection = conn;
// };

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // console.log(connection())
  return stdin;

};

const handleUserInput = function (data) {
  // your code here
  // console.log(data)
  if (data === '\u0003') {
    console.log('Shutting down')
    process.exit();
  }

  switch (data) {
    case 'w':
      connection.write('Move: up')
      break;
    case 'a':
      connection.write('Move: left')
      break;
    case 's':
      connection.write('Move: down')
      break;
    case 'd':
      connection.write('Move: right')
      break;
    case 't':
      connection.write('Say: FEED ME')
      break;
    case 'y':
      connection.write('Say: ( ͡° ͜ʖ ͡°)')
      break;
    case 'f':
      connection.write('Say: ᕦ(ò_óˇ)ᕤ')
      break;
  }
  // if (data === 'w') {
  //   connect.write()
  // }
  // return data
};



stdin.on("data", handleUserInput);

module.exports = {
  setupInput
};
const stdin = process.stdin;

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function (data) {
  // your code here
  console.log(data)
  if (data === '\u0003') {
    console.log('Shutting down')
    process.exit();
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
// Stores the actve TCP connection object.
let connection;

const setupInput = function (conn) {
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function (key) {
  console.log(key);
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write('Move: up');
    console.log('up');
  }
  if (key === 'a') {
    connection.write('Move: left');
    console.log('left');
  }
  if (key === 's') {
    connection.write('Move: down');
    console.log('down');
  }
  if (key === 'd') {
    connection.write('Move: right');
    console.log('right');
  }
};

module.exports = {
    setupInput
  };
const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541 // PORT number here,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
  // code that does something when the connection is first established
  console.log("you ded cuz you idled")
});
  return conn;
}

connect();

  module.exports = {
    connect,
  };
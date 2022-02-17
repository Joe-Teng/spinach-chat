var WebSocketServer = require("ws").Server;
let wss = new WebSocketServer({ port: 8080, origin: "ws://192.168.202.6" });

// 连接池
var clients = [];

function newGuid() {
  var guid = "";
  for (var i = 1; i <= 32; i++) {
    var n = Math.floor(Math.random() * 16.0).toString(16);
    guid += n;
    if (i === 8 || i === 12 || i === 16 || i === 20) guid += "-";
  }
  return guid;
}

wss.on("connection", function (ws, req) {
  const socketId = newGuid();
  clients.push({
    ws,
    socketId
  });
  ws.send(
    JSON.stringify({
      init: true,
      socketId
    })
  );
  let _message = "";
  ws.on("message", function (message) {
    clients
      .filter(
        (item) =>
          item?.socketId !==
          JSON.parse(message.toString("utf-8", 0, message.length))?.socketId
      )
      .forEach((wsItem) => {
        wsItem?.ws?.send(message.toString("utf-8", 0, message.length));
      });
  });

  ws.on("close", function (message) {});
});

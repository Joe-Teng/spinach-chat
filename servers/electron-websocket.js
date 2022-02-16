var WebSocketServer = require("ws").Server;
const wss = new WebSocketServer({ port: 8080, origin: "ws://192.168.202.6" });
const webSockets = {};

// 连接池
var clients = [];

wss.on("connection", function (ws) {
  console.log(
    "%celectron-websocket.js line:9 object",
    "color: #007acc;",
    "连接成功"
  );
  // 将该连接加入连接池
  clients.push(ws);
  ws.on("message", function (message) {
    console.log(
      "%celectron-websocket.js line:18 object",
      "color: #007acc;",
      new StringDecoder("utf8").write(Buffer.from(message))
    );

    setTimeout(() => {
      ws.send("12321321321");
    }, 2000);
  });

  ws.on("close", function (message) {
    // 连接关闭时，将其移出连接池
    clients = clients.filter(function (ws1) {
      return ws1 !== ws;
    });
  });
});

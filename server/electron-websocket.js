var WebSocketServer = require("ws").Server;
// { port: 8080, origin: "ws://192.168.202.6" }
let wss = new WebSocketServer();

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
  let currentWs = ws;
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
    const _transformMessage = JSON.parse(
      message.toString("utf-8", 0, message.length)
    );
    switch (_transformMessage?.chatType) {
      case 0:
        if (!_transformMessage.token) {
          clients.forEach((item) => {
            if (item.socketId === _transformMessage.socketId) {
              item.token =
                _transformMessage?.token || _transformMessage.socketId;
              item.userName = _transformMessage?.userName;
            }
          });
        } else {
          // const _clients = clients.filter(
          //   (item) => item.token !== _transformMessage?.token
          // );
          // clients = _clients.splice(0);
          // clients.forEach((item) => {
          //   if (item.socketId === _transformMessage.socketId) {
          //     item.token = _transformMessage.socketId;
          //     item.userName = _transformMessage?.userName;
          //   }
          // });
        }
        break;
      case 1:
        break;
      case 1:
        const recieveUser = clients.filter(
          (item) => item.userName === _transformMessage?.to
        );
        console.log(
          "%celectron-websocket.js line:69 recieveUser",
          "color: #007acc;",
          clients
        );
        if (recieveUser[0]) {
          recieveUser[0].ws.send(
            JSON.stringify({
              from: _transformMessage?.from,
              message: _transformMessage?.message,
              date: _transformMessage?.date
            })
          );
        }
        break;
      default:
        break;
    }
  });

  ws.on("close", function (message) {});
});

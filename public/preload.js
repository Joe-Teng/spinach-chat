const { ipcRenderer } = require("electron");
const path = require("path");
const rf = require("fs");
const chatRecordData = rf.readFileSync(
  path.join(__dirname, "../servers/chatrecord.json"),
  "utf-8"
);
window.ipcRenderer = ipcRenderer;
window.localStorage.setItem("chatRecordList", chatRecordData);

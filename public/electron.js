const {
  app,
  BrowserWindow,
  ipcMain,
  nativeTheme,
  Menu,
  MenuItem,
  globalShortcut,
  shell,
  Notification
} = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");
const rf = require("fs");

let mainWin = null;
const ElectronMenu = [
  {
    label: "",
    submenu: [
      {
        label: "OpenDevTools",
        click: () => {
          mainWin.webContents.openDevTools({ mode: "right" });
        }
      }
    ]
  },
  {
    label: "Enviroment",
    submenu: [
      {
        label: "DEV",
        type: "radio",
        click: () => {
          mainWin.webContents.send("event-modifyEnv", "dev");
        }
      },
      {
        label: "TST02",
        type: "radio",
        click: () => {
          mainWin.webContents.send("event-modifyEnv", "tst02");
        }
      },
      {
        label: "TST03",
        type: "radio",
        click: () => {
          mainWin.webContents.send("event-modifyEnv", "tst03");
        }
      }
    ]
  },
  {
    label: "View",
    submenu: [
      {
        label: "HOME",
        click: () => {
          win.loadURL(
            isDev ? "http://localhost:3000" : `file://${__dirname}/index.html`
          );
        }
      }
    ]
  }
];

const initialWindow = ({
  width = 1090,
  height = 800,
  minWidth = 830,
  url = "",
  isMaxSize = false,
  showDevTools = false,
  position = "bottom",
  excutedStatement = ``,
  nodeIntegration = true,
  contextIsolation = false,
  enableRemoteModule = true,
  webSecurity = false
}) => {
  const newWindow = new BrowserWindow({
    ...(isMaxSize ? {} : { width, height }),
    titleBarStyle: "hidden",
    minWidth,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      contextIsolation: false,
      enableRemoteModule,
      webSecurity,
      preload: path.join(__dirname, "./preload.js")
    }
  });

  newWindow.loadURL(url);
  excutedStatement && newWindow.webContents.executeJavaScript(excutedStatement);
  isMaxSize && newWindow.maximize();
  showDevTools && newWindow.webContents.openDevTools({ mode: position });
  return newWindow;
};

app.on("ready", async ({ excutedStatement }) => {
  Menu.setApplicationMenu(Menu.buildFromTemplate(ElectronMenu));
  mainWin = initialWindow({
    url: isDev ? "http://localhost:3098" : `file://${__dirname}/index.html`,
    excutedStatement
  });
});

app.on("activate", function () {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

const { app, BrowserWindow } = require("electron");

require("electron-reload")(__dirname);
function createWindow() {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 600,
        minHeight: 600,
        maxWidth: 900,
        icon: "media/icon-lg.png",
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
        },
        frame: false,
    });
    win.loadFile("index.html");
}

app.whenReady().then(createWindow);

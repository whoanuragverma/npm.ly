const { remote } = require("electron");
const { BrowserWindow } = remote;
document.querySelector(".minimize").addEventListener("click", () => {
    BrowserWindow.getFocusedWindow().minimize();
});
document.querySelector(".maximize").addEventListener("click", () => {
    BrowserWindow.getFocusedWindow().maximize();
});
document.querySelector(".close").addEventListener("click", () => {
    BrowserWindow.getFocusedWindow().close();
});

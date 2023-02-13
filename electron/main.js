const { app, BrowserWindow, ipcMain, desktopCapturer } = require('electron');
const { channels } = require('../src/shared/constant');
const path = require("path")
require('@electron/remote/main').initialize()

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadURL('http://localhost:3000');

};

app.whenReady().then(() => {
  createWindow();
  ipcMain.handle(channels.GET_SCREENS, get_screens)
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});


// In the main process.

async function get_screens(){
  const inputSources = await desktopCapturer.getSources({ types: ['window', 'screen'] })
  console.log(inputSources);
  console.log("called")
}


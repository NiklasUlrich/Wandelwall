const { app, BrowserWindow } = require('electron');
const path = require('path');
const createWindow = () => {
    const win = new BrowserWindow({
      width: 1280,
      height: 960,
      useContentSize: true,
      resizable: false,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js')
      }
      
    })

    win.setMenu(null);

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })
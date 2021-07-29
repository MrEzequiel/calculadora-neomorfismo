const { BrowserWindow } = require('electron')
const { Tray } = require('electron')

function createWindow() {
  const appIcon = new Tray('assets' + '/calc.png')

  const mainWindow = new BrowserWindow({
    width: 400,
    height: 700,
    resizable: false,
    fullscreeneble: false,
    icon: 'assets' + '/calc.png'
  })
  mainWindow.loadFile('./index.html')
  mainWindow.setMenuBarVisibility(false)

  return mainWindow
}

module.exports = createWindow()

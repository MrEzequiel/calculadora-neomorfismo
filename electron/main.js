const { app, BrowserWindow } = require('electron')

function App() {
  const mainWindow = require('./CreateWindow.js')
}

app.whenReady().then(() => {
  App()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) {
      App()
    }
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

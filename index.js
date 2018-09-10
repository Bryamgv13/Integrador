const {app, BrowserWindow} = require('electron')
  
  // Mantén una referencia global del objeto window, si no lo haces, la ventana 
  // se cerrará automáticamente cuando el objeto JavaScript sea eliminado por el recolector de basura.
  let win
  
  function createWindow () {
    // Crea la ventana del navegador.
    win = new BrowserWindow({width: 1040, height: 800})
  
    // y carga el archivo index.html de la aplicación.
    win.loadURL(`file://${__dirname}/public/index.html`)
  
    // Abre las herramientas de desarrollo (DevTools).
    win.webContents.openDevTools()
  
    // Emitido cuando la ventana es cerrada.
    win.on('closed', () => {
      win = null
    })
  }
  
  // Este método será llamado cuando Electron haya terminado
  // la inicialización y esté listo para crear ventanas del navegador.
  // Algunas APIs pueden usarse sólo después de que este evento ocurra.
  app.on('ready', createWindow)
  
  // Sal cuando todas las ventanas hayan sido cerradas.
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  
  app.on('activate', () => {
    if (win === null) {
      createWindow()
    }
  })
  
  // En este archivo puedes incluir el resto del código del proceso principal de
  // tu aplicación. También puedes ponerlos en archivos separados y requerirlos aquí.
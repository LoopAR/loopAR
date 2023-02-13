const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    get_screens: () => ipcRenderer.invoke('get_screens')
})
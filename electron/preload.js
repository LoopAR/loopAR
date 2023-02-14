const { contextBridge, ipcRenderer, ipcMain } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  get_screens: () => ipcRenderer.invoke("get_screens"),
  record_audio: (sourceId) => ipcRenderer.invoke("record_audio", sourceId)
});



async function record_audio(sourceId){
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: {
        mandatory: {
          chromeMediaSource: 'desktop',
          chromeMediaSourceId: sourceId,
        }
      },
      video: false
     
    })
    console.log(stream)
  } catch (e) {
    console.log(e)
  }
}

module.exports = {
  record_audio : (sourceId)=>{
    record_audio(sourceId)
  }
}
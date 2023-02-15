const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  get_screens: () => ipcRenderer.invoke("get_screens"),
  record_audio: (sourceId) => record_audio(sourceId),
});

async function record_audio(sourceId) {
  console.log(`This is screen id : ${sourceId}`);
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false,
      // video: {
      //   mandatory: {
      //     chromeMediaSource: "desktop",
      //     chromeMediaSourceId: sourceId,
      //     minWidth: 1280,
      //     maxWidth: 1280,
      //     minHeight: 720,
      //     maxHeight: 720,
      //   },
      // },
    });
    console.log("captured");
    console.log(stream);
  } catch (e) {
    console.log(e);
  }
}

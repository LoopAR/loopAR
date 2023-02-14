import { useState } from "react";


function App() {

  const [screens, setScreens] = useState([])

  const handleClick = async () => {
    const inputSources = await window.electronAPI.get_screens();
    const tempSources = []
    for(const source of inputSources){
      tempSources.push(source)
    }
    setScreens(tempSources)
    console.log(tempSources)
  }
  return (
    <div className="App">
      <button onClick={handleClick}>Get Data</button>
      {
        screens.map((val, i) => {
          return(<p onClick={()=>{
            window.electronAPI.record_audio(val.id)
          }}>{val.name}</p>)
        })
      }
    </div>
  );
}

export default App;

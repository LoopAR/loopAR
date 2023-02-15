import { useState } from "react";

function App() {
  const [screens, setScreens] = useState([]);

  const handleClick = async () => {
    const inputSources = await window.electronAPI.get_screens();
    const tempSources = [];
    for (const source of inputSources) {
      tempSources.push(source);
    }
    setScreens(tempSources);
    console.log(tempSources);
  };
  return (
    <div className="App">
      <button onClick={handleClick}>Get Data</button>
      {screens.map((val, i) => {
        return (
          <img
            onClick={() => {
              window.electronAPI.record_audio(val.id);
              console.log(val.thumbnail.toDataURL())
            }}
            src={val.thumbnail.toDataURL}
          />
        );
      })}
    </div>
  );
}

export default App;

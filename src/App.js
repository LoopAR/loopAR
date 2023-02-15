import { useState } from "react";

function App() {
  const [screens, setScreens] = useState([]);
  const [icon, setIcon] = useState("");

  const handleClick = async () => {
    const inputSources = await window.electronAPI.get_screens();
    const tempSources = [];
    // for (const source of inputSources) {
    //   tempSources.push(source);
    // }
    setScreens(inputSources);
    console.log(inputSources[1].allData.appIcon.toDataURL());
  };
  return (
    <div className="App">
      <button onClick={handleClick}>Get Data</button>
      {screens.map((val, i) => {
        return (
          <img
            key={val.id}
            onClick={() => {
              window.electronAPI.record_audio(val.id);
              console.log(val.thumbnail.toDataURL());
            }}
            src={val.thumbnail?.toDataURL}
          />
        );
      })}

      <img src={screens[3]?.url} />
    </div>
  );
}

export default App;

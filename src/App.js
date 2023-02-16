import { useState } from "react";

function App() {
  const [screens, setScreens] = useState([]);
  const [icon, setIcon] = useState("");

  const handleClick = async () => {
    let inputSources = await window.electronAPI.get_screens();
    const tempSources = [];
    for (const source of inputSources) {
      tempSources.push(source);
    }
    setScreens(tempSources);
    console.log(screens);
    // console.log(inputSources[1].allData.thumbnail.toDataURL());
  };
  return (
    <div className="App">
      <button onClick={() => handleClick()}>Get Data</button>
      {screens.map((val, i) => {
        return (
          <img
            key={val.id}
            onClick={() => {
              window.electronAPI.record_audio(val.id);
              // console.log(val.thumbnail.toDataURL());
            }}
            // src={val?.url}
            src={val?.appIcon}
          />
          // <p
          //   key={val.id}
          //   onClick={() => {
          //     window.electronAPI.record_audio(val.id);
          //     // console.log(val.thumbnail.toDataURL());
          //   }}
          // >
          //   {val.name}
          // </p>
        );
      })}

      {/* <img src={screens[1]?.url} /> */}
    </div>
  );
}

export default App;

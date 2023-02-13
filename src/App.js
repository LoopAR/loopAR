const handleClick = async ()=>{
  await window.electronAPI.get_screens();
}

function App() {
  return (
    <div className="App">
      <button onClick={handleClick}>Get Data</button>
    </div>
  );
}

export default App;

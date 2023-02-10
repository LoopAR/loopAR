// const {desktopCapturer} = window.require("electron")
function App() {

  const getSources = ()=>{
    console.log("hello");
    console.log(window.desktopCapture)
  }

  return (
    <div className="App">
      <button onClick={getSources}>Show Sources</button>
    </div>
  );
}

export default App;

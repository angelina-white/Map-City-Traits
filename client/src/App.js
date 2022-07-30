import './App.css';
import USAMap from "react-usa-map";


function App() {
  const city = "Washington DC"

  function mapHandler(event)
  {
    alert(event.target.dataset.name);
  };

  function statesCustomConfig()
  {
    return {
      "NJ": {
        fill: "navy",
        clickHandler: (event) => console.log('Custom handler for NJ', event.target.dataset)
      },
      "NY": {
        fill: "#CC0000"
      }
    };
  }

  return (
    <div className="App">
      {/* <USAMap customize={statesCustomConfig()} onClick={mapHandler} /> */}
      <USAMap onClick={mapHandler} />
      <div className="circle" />
    </div>
  );
}

export default App;

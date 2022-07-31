import './App.css';
import { useState } from 'react';
import Default from "./Components/Default";
import BAH from "./Components/BAH";

function App() 
{
  // function mapHandler(event)
  // {
  //   alert(event.target.dataset.name);
  // };

  // function statesCustomConfig()
  // {
  //   return {
  //     "NJ": {
  //       fill: "navy",
  //       clickHandler: (event) => console.log('Custom handler for NJ', event.target.dataset)
  //     },
  //     "NY": {
  //       fill: "#CC0000"
  //     }
  //   };
  // }

  const [isBAH, setIsBAH] = useState(false)

  function clickDefault()
  {
    setIsBAH(false)
  }

  function clickBAH()
  {
    setIsBAH(true)
  }

  return (
    <div className="App">

      <div id="titleCont">
        <h1>Things that may or may not be important for moving</h1>
      </div>

      <div id="optionsNav">
        <h2 id="options">Options</h2>
        <h3 className="pointer" onClick={ clickDefault }>Default</h3>
        <h3 className="pointer" onClick={ clickBAH }>BAH</h3>
      </div>

      { isBAH ?
        <BAH />
      :
        <Default />
      }
    
    </div>
  );
}

export default App;

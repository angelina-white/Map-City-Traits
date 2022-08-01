import './App.css';
import { useState } from 'react';
import Default from "./Components/Default";
import BAH from "./Components/BAH";
import Climate from "./Components/Climate";

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

  const [showWeather, setShowWeather] = useState(false)

  const [isBAH, setIsBAH] = useState(false)
  const [isClimate, setIsClimate] = useState(false)

  function clickDefault()
  {
    setIsBAH(false)
    setIsClimate(false)
  }

  function clickBAH()
  {
    setIsBAH(true)
    setIsClimate(false)
  }

  function clickClimate()
  {
    setIsClimate(true)
    setIsBAH(false)
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
        <h3 className="pointer" onClick={ () => setShowWeather((showWeather) => showWeather = !showWeather) }>Weather</h3>
        {showWeather ?
          <ul>
            <li onClick={ clickClimate }>Climate</li>
          </ul>
        :
          <div></div>
        }
      </div>

      { isBAH ?
        <BAH />
      :
        <div>
          { isClimate ?
            <Climate />
          :
            <Default />
          }
        </div>
      }
    
    </div>
  );
}

export default App;

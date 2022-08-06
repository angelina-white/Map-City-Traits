import './App.css';
import { useState } from 'react';
import Default from "./Components/Default";
import BAH from "./Components/BAH";
import Climate from "./Components/Climate";
import Safety from "./Components/Safety";

function App() 
{
  const [showWeather, setShowWeather] = useState(false)

  const [isBAH, setIsBAH] = useState(false)
  const [isClimate, setIsClimate] = useState(false)
  const [isSafety, setIsSafety] = useState(false)

  function clickDefault()
  {
    setIsBAH(false)
    setIsClimate(false)
    setIsSafety(false)
  }

  function clickBAH()
  {
    setIsBAH(true)
    setIsClimate(false)
    setIsSafety(false)
  }

  function clickClimate()
  {
    setIsClimate(true)
    setIsBAH(false)
    setIsSafety(false)
  }

  function clickSafety()
  {
    setIsSafety(true)
    setIsClimate(false)
    setIsBAH(false)
  }

  return (
    <div className="App">

      <div id="titleCont">
        <h1>Air Force Base Traits</h1>
      </div>

      <div id="optionsNav">
        <h2 id="options">Options</h2>
        <h3 className="pointer" onClick={ clickDefault }>Default</h3>
        <h3 className="pointer" onClick={ clickBAH }>BAH</h3>
        <h3 className="pointer" onClick={ clickSafety }>Safety</h3>
        <h3 className="pointer" onClick={ clickClimate }>Weather</h3>
      </div>

      { isBAH ?
        <BAH />
      :
        <div>
          { isClimate ?
            <Climate />
          :
            <div>
              { isSafety ?
                <Safety />
              :
                <Default />
              }
            </div>
          }
        </div>
      }
    
    </div>
  );
}

export default App;

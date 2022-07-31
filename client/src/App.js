import './App.css';
import USAMap from "react-usa-map";
import { useEffect, useState } from 'react';
import axios from 'axios';

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

  return (
    <div className="App">
      {/* <USAMap customize={statesCustomConfig()} onClick={mapHandler} /> */}
      <USAMap />
      <div className="circle" id="dc" />
      <div className="circle" id="nyc" />
      <div className="circle" id="boston" />
      <div className="circle" id="trenton" />
      <div className="circle" id="dover" />
      <div className="circle" id="hampton" />
      <div className="circle" id="goldsboro" />
      <div className="circle" id="charleston" />
      <div className="circle" id="sumter" />
      <div className="circle" id="tullahoma" />
      <div className="circle" id="columbus" />
      <div className="circle" id="montgomery" />
      <div className="circle" id="atlanta" />
      <div className="circle" id="atlanta" />
      <div className="circle" id="biloxi" />
      <div className="circle" id="valparaiso" />
      <div className="circle" id="panamaCity" />
      <div className="circle" id="tampa" />
      <div className="circle" id="cocoaBeach" />
      <div className="circle" id="dayton" />
      <div className="circle" id="belleville" />
      <div className="circle" id="knobNoster" />
      <div className="circle" id="littleRock" />
      <div className="circle" id="minot" />
      <div className="circle" id="grandForks" />
      <div className="circle" id="offutt" />
      <div className="circle" id="wichita" />
      <div className="circle" id="enida" />
      <div className="circle" id="oklahomaCity" />
      <div className="circle" id="altus" />
      <div className="circle" id="wichitaFalls" />
      <div className="circle" id="sanAngelo" />
      <div className="circle" id="abilene" />
      <div className="circle" id="delRio" />
      <div className="circle" id="sanAntonio" />
      <div className="circle" id="rapidCity" />
      <div className="circle" id="cheyenne" />
      <div className="circle" id="aurora" />
      <div className="circle" id="coloradoSprings" />
      <div className="circle" id="clovis" />
      <div className="circle" id="albuqurque" />
      <div className="circle" id="alamogordo" />
      <div className="circle" id="greatFalls" />
      <div className="circle" id="spokane" />
      <div className="circle" id="takoma" />
      <div className="circle" id="mountainHome" />
      <div className="circle" id="ogden" />
      <div className="circle" id="marysville" />
      <div className="circle" id="fairchild" />
      <div className="circle" id="lasVegas" />
      <div className="circle" id="indianSprings" />
      <div className="circle" id="rosamond" />
      <div className="circle" id="lompoc" />
      <div className="circle" id="elSegundo" />
      <div className="circle" id="anchorage" />
      <div className="circle" id="fairbanks" />
      <div className="circle" id="honolulu" />
    </div>
  );
}

export default App;

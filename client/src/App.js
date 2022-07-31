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
  const [isDc, setIsDc] = useState(false)
  const [isBoston, setIsBoston] = useState(false)
  const [isTrenton, setIsTrenton] = useState(false)
  const [isDover, setIsDover] = useState(false)
  const [isHampton, setIsHampton] = useState(false)
  const [isGoldsboro, setIsGoldsboro] = useState(false)
  const [isCharleston, setIsCharleston] = useState(false)
  const [isSumter, setIsSumter] = useState(false)
  const [isTullahoma, setIsTullahoma] = useState(false)
  const [isColumbus, setIsColumbus] = useState(false)
  const [isMontgomery, setIsMontgomery] = useState(false)
  const [isValdosta, setIsValdosta] = useState(false)
  const [isMacon, setIsMacon] = useState(false)
  const [isBiloxi, setIsBiloxi] = useState(false)
  const [isValparaiso, setIsValparaiso] = useState(false)
  const [isPanamaCity, setIsPanamaCity] = useState(false)
  const [isTampa, setIsTampa] = useState(false)
  const [isCocoaBeach, setIsCocoaBeach] = useState(false)
  const [isDayton, setIsDayton] = useState(false)
  const [isBelleville, setIsBelleville] = useState(false)
  const [isKnobNoster, setIsKnobNoster] = useState(false)
  const [isLittleRock, setIsLittleRock] = useState(false)
  const [isMinot, setIsMinot] = useState(false)
  const [isGrandForks, setIsGrandForks] = useState(false)
  const [isOffutt, setIsOffutt] = useState(false)
  const [isWichita, setIsWichita] = useState(false)
  const [isEnida, setIsEnida] = useState(false)
  const [isOklahomaCity, setIsOklahoma] = useState(false)
  const [isAltus, setIsAltus] = useState(false)
  const [isWichitaFalls, setIsWichitaFalls] = useState(false)
  const [isSanAngelo, setIsSanAngelo] = useState(false)
  const [isAbilene, setIsAbilene] = useState(false)
  const [isDelRio, setIsDelRio] = useState(false)
  const [isSanAntonio, setIsSanAntonio] = useState(false)
  const [isRapidCity, setIsRapidCity] = useState(false)

  return (
    <div className="App">
      {/* <USAMap customize={statesCustomConfig()} onClick={mapHandler} /> */}
      <USAMap />
      <div className="circle" id="dc" onMouseOver={ ()=> setIsDc(true) } onMouseLeave={ ()=> setIsDc(false) } />
      <div className="circle" id="boston" onMouseOver={ ()=> setIsBoston(true) } onMouseLeave={ ()=> setIsBoston(false) }/>
      <div className="circle" id="trenton" onMouseOver={ ()=> setIsTrenton(true) } onMouseLeave={ ()=> setIsTrenton(false) }/>
      <div className="circle" id="dover" onMouseOver={ ()=> setIsDover(true) } onMouseLeave={ ()=> setIsDover(false) }/>
      <div className="circle" id="hampton" onMouseOver={ ()=> setIsHampton(true) } onMouseLeave={ ()=> setIsHampton(false) }/>
      <div className="circle" id="goldsboro" onMouseOver={ ()=> setIsGoldsboro(true) } onMouseLeave={ ()=> setIsGoldsboro(false) }/>
      <div className="circle" id="charleston" onMouseOver={ ()=> setIsCharleston(true) } onMouseLeave={ ()=> setIsCharleston(false) }/>
      <div className="circle" id="sumter" onMouseOver={ ()=> setIsSumter(true) } onMouseLeave={ ()=> setIsSumter(false) }/>
      <div className="circle" id="tullahoma" onMouseOver={ ()=> setIsTullahoma(true) } onMouseLeave={ ()=> setIsTullahoma(false) }/>
      <div className="circle" id="columbus" onMouseOver={ ()=> setIsColumbus(true) } onMouseLeave={ ()=> setIsColumbus(false) }/>
      <div className="circle" id="montgomery" onMouseOver={ ()=> setIsMontgomery(true) } onMouseLeave={ ()=> setIsMontgomery(false) }/>
      <div className="circle" id="valdosta" onMouseOver={ ()=> setIsValdosta(true) } onMouseLeave={ ()=> setIsValdosta(false) }/>
      <div className="circle" id="macon" onMouseOver={ ()=> setIsMacon(true) } onMouseLeave={ ()=> setIsMacon(false) }/>
      <div className="circle" id="biloxi" onMouseOver={ ()=> setIsBiloxi(true) } onMouseLeave={ ()=> setIsBiloxi(false) }/>
      <div className="circle" id="valparaiso" onMouseOver={ ()=> setIsValparaiso(true) } onMouseLeave={ ()=> setIsValparaiso(false) }/>
      <div className="circle" id="panamaCity" onMouseOver={ ()=> setIsPanamaCity(true) } onMouseLeave={ ()=> setIsPanamaCity(false) }/>
      <div className="circle" id="tampa" onMouseOver={ ()=> setIsTampa(true) } onMouseLeave={ ()=> setIsTampa(false) }/>
      <div className="circle" id="cocoaBeach" onMouseOver={ ()=> setIsCocoaBeach(true) } onMouseLeave={ ()=> setIsCocoaBeach(false) }/>
      <div className="circle" id="dayton" onMouseOver={ ()=> setIsDayton(true) } onMouseLeave={ ()=> setIsDayton(false) }/>
      <div className="circle" id="belleville" onMouseOver={ ()=> setIsBelleville(true) } onMouseLeave={ ()=> setIsBelleville(false) }/>
      <div className="circle" id="knobNoster" onMouseOver={ ()=> setIsKnobNoster(true) } onMouseLeave={ ()=> setIsKnobNoster(false) }/>
      <div className="circle" id="littleRock" onMouseOver={ ()=> setIsLittleRock(true) } onMouseLeave={ ()=> setIsLittleRock(false) }/>
      <div className="circle" id="minot" onMouseOver={ ()=> setIsMinot(true) } onMouseLeave={ ()=> setIsMinot(false) }/>
      <div className="circle" id="grandForks" onMouseOver={ ()=> setIsGrandForks(true) } onMouseLeave={ ()=> setIsGrandForks(false) }/>
      <div className="circle" id="offutt" onMouseOver={ ()=> setIsOffutt(true) } onMouseLeave={ ()=> setIsOffutt(false) }/>
      <div className="circle" id="wichita" onMouseOver={ ()=> setIsWichita(true) } onMouseLeave={ ()=> setIsWichita(false) }/>
      <div className="circle" id="enida" onMouseOver={ ()=> setIsEnida(true) } onMouseLeave={ ()=> setIsEnida(false) } />
      <div className="circle" id="oklahomaCity" onMouseOver={ ()=> setIsOklahoma(true) } onMouseLeave={ ()=> setIsOklahoma(false) } />
      <div className="circle" id="altus" onMouseOver={ ()=> setIsAltus(true) } onMouseLeave={ ()=> setIsAltus(false) } />
      <div className="circle" id="wichitaFalls" onMouseOver={ ()=> setIsWichitaFalls(true) } onMouseLeave={ ()=> setIsWichitaFalls(false) } />
      <div className="circle" id="sanAngelo" onMouseOver={ ()=> setIsSanAngelo(true) } onMouseLeave={ ()=> setIsSanAngelo(false) } />
      <div className="circle" id="abilene" onMouseOver={ ()=> setIsAbilene(true) } onMouseLeave={ ()=> setIsAbilene(false) }/>
      <div className="circle" id="delRio" onMouseOver={ ()=> setIsDelRio(true) } onMouseLeave={ ()=> setIsDelRio(false) }/>
      <div className="circle" id="sanAntonio" onMouseOver={ ()=> setIsSanAntonio(true) } onMouseLeave={ ()=> setIsSanAntonio(false) }/>
      <div className="circle" id="rapidCity" onMouseOver={ ()=> setIsRapidCity(true) } onMouseLeave={ ()=> setIsRapidCity(false) }/>
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

      { isDc ? 
        <div className="baseNameCont" id="showDc">
          <p>Joint Base Andrews,</p>
          <p>Camp Springs, MD</p>
        </div> 
      : <div></div> }
      { isBoston ? 
        <div className="baseNameCont" id="showBoston">
          <p>Hanscom,</p>
          <p>Boston, MA</p>
        </div> 
      : <div></div> }
      { isTrenton ? 
        <div className="baseNameCont" id="showTrenton">
          <p>Joint Base Mcguire-Dix-Lakehurst,</p>
          <p>Trenton, NJ</p>
        </div> 
      : <div></div> }
      { isDover ? 
        <div className="baseNameCont" id="showDover">
          <p>Dover,</p>
          <p>Dover, DE</p>
        </div> 
      : <div></div> }
      { isHampton ? 
        <div className="baseNameCont" id="showHampton">
          <p>Joint Base Langely-Eustis,</p>
          <p>Hampton, VA</p>
        </div> 
      : <div></div> }
      { isGoldsboro ? 
        <div className="baseNameCont" id="showGoldsboro">
          <p>Seymour-Johnson,</p>
          <p>Goldsboro, NC</p>
        </div> 
      : <div></div> }
      { isCharleston ? 
        <div className="baseNameCont" id="showCharleston">
          <p>Joint Base Charleston,</p>
          <p>Charleston, SC</p>
        </div> 
      : <div></div> }
      { isSumter ? 
        <div className="baseNameCont" id="showSumter">
          <p>Shaw,</p>
          <p>Sumter, SC</p>
        </div> 
      : <div></div> }
      { isTullahoma ? 
        <div className="baseNameCont" id="showTullahoma">
          <p>Arnold,</p>
          <p>Tullahoma, TN</p>
        </div> 
      : <div></div> }
      { isColumbus ? 
        <div className="baseNameCont" id="showColumbus">
          <p>Columbus,</p>
          <p>Columbus, MS</p>
        </div> 
      : <div></div> }
      { isMontgomery ? 
        <div className="baseNameCont" id="showMontgomery">
          <p>Maxwell,</p>
          <p>Montgomery, AL</p>
        </div> 
      : <div></div> }
      { isValdosta ? 
        <div className="baseNameCont" id="showValdosta">
          <p>Moody,</p>
          <p>Valdosta, GA</p>
        </div> 
      : <div></div> }
      { isMacon ? 
        <div className="baseNameCont" id="showMacon">
          <p>Robins,</p>
          <p>Macon, GA</p>
        </div> 
      : <div></div> }
      { isBiloxi ? 
        <div className="baseNameCont" id="showBiloxi">
          <p>Keesler,</p>
          <p>Biloxi, MS</p>
        </div> 
      : <div></div> }
      { isValparaiso ? 
        <div className="baseNameCont" id="showValparaiso">
          <p>Eglin,</p>
          <p>Valparaiso, FL</p>
        </div> 
      : <div></div> }
      { isPanamaCity ? 
        <div className="baseNameCont" id="showPanamaCity">
          <p>Tyndall,</p>
          <p>Panama City, FL</p>
        </div> 
      : <div></div> }
      { isTampa ? 
        <div className="baseNameCont" id="showTampa">
          <p>Macdill,</p>
          <p>Tampa, FL</p>
        </div> 
      : <div></div> }
      { isCocoaBeach ? 
        <div className="baseNameCont" id="showCocoaBeach">
          <p>Patrick,</p>
          <p>Cocoa Beach, FL</p>
        </div> 
      : <div></div> }
      { isDayton ? 
        <div className="baseNameCont" id="showDayton">
          <p>Wright-Patterson,</p>
          <p>Dayton, OH</p>
        </div> 
      : <div></div> }
      { isBelleville ? 
        <div className="baseNameCont" id="showBelleville">
          <p>Scott,</p>
          <p>Belleville, IL</p>
        </div> 
      : <div></div> }
      { isKnobNoster ? 
        <div className="baseNameCont" id="showKnobNoster">
          <p>Whiteman,</p>
          <p>Knob Noster, MO</p>
        </div> 
      : <div></div> }
      { isLittleRock ? 
        <div className="baseNameCont" id="showLittleRock">
          <p>Little Rock,</p>
          <p>Little Rock, AR</p>
        </div> 
      : <div></div> }
      { isMinot ? 
        <div className="baseNameCont" id="showMinot">
          <p>Minot,</p>
          <p>Minot, ND</p>
        </div> 
      : <div></div> }
      { isGrandForks ? 
        <div className="baseNameCont" id="showGrandForks">
          <p>Grand Forks,</p>
          <p>Grand Forks, ND</p>
        </div> 
      : <div></div> }
      { isOffutt ? 
        <div className="baseNameCont" id="showOffutt">
          <p>Offutt,</p>
          <p>Bellvue, NE</p>
        </div> 
      : <div></div> }
      { isWichita ? 
        <div className="baseNameCont" id="showWichita">
          <p>McConnell,</p>
          <p>Wichita, KS</p>
        </div> 
      : <div></div> }
      { isEnida ? 
        <div className="baseNameCont" id="showEnida">
          <p>Vance,</p>
          <p>Enid, OK</p>
        </div> 
      : <div></div> }
      { isOklahomaCity ? 
        <div className="baseNameCont" id="showOklahomaCity">
          <p>Tinker,</p>
          <p>Oklahoma City, OK</p>
        </div> 
      : <div></div> }
      { isAltus ? 
        <div className="baseNameCont" id="showAltus">
          <p>Altus,</p>
          <p>Altus, OK</p>
        </div> 
      : <div></div> }
      { isWichitaFalls ? 
        <div className="baseNameCont" id="showWichitaFalls">
          <p>Sheppard,</p>
          <p>Wichita Falls, TX</p>
        </div> 
      : <div></div> }
      { isSanAngelo ? 
        <div className="baseNameCont" id="showSanAngelo">
          <p>Goodfellow,</p>
          <p>San Angelo, TX</p>
        </div> 
      : <div></div> }
      { isAbilene ? 
        <div className="baseNameCont" id="showAbilene">
          <p>Dyess,</p>
          <p>Abilene, TX</p>
        </div> 
      : <div></div> }
      { isDelRio ? 
        <div className="baseNameCont" id="showDelRio">
          <p>Laughlin,</p>
          <p>Del Rio, TX</p>
        </div> 
      : <div></div> }
      { isSanAntonio ? 
        <div className="baseNameCont" id="showSanAntonio">
          <p>Joint Base San Antonio-Lackland/Joint Base San Antonio-Randolph,</p>
          <p>San Antonio, TX</p>
        </div> 
      : <div></div> }
      { isRapidCity ? 
        <div className="baseNameCont" id="showRapidCity">
          <p>Ellsworth,</p>
          <p>Rapid City, SD</p>
        </div> 
      : <div></div> }
    </div>
  );
}

export default App;

import { useState } from 'react';
import USAMap from "react-usa-map";

function Default()
{
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
    const [isCheyenne, setIsCheyenne] = useState(false)
    const [isAurora, setIsAurora] = useState(false)
    const [isColoradoSprings, setIsColoradoSprings] = useState(false)
    const [isClovis, setIsClovis] = useState(false)
    const [isAlbuqurque, setIsAlbuqurque] = useState(false)
    const [isAlamogordo, setIsAlamogordo] = useState(false)
    const [isGreatFalls, setIsGreatFalls] = useState(false)
    const [isSpokane, setIsSpokane] = useState(false)
    const [isTakoma, setIsTakoma] = useState(false)
    const [isMountainHome, setIsMountainHome] = useState(false)
    const [isOgden, setIsOgden] = useState(false)
    const [isMarysville, setIsMarysville] = useState(false)
    const [isTravis, setIsTravis] = useState(false)
    const [isLasVegas, setIsLasVegas] = useState(false)
    const [isIndianSprings, setIsIndianSprings] = useState(false)
    const [isRosamond, setIsRosamond] = useState(false)
    const [isLompoc, setIsLompoc] = useState(false)
    const [isElSegundo, setIsElSegundo] = useState(false)
    const [isAnchorage, setIsAnchorage] = useState(false)
    const [isFairbanks, setIsFairbanks] = useState(false)
    const [isHonolulu, setIsHonolulu] = useState(false)

    return (
        <div className="mapContainer">
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
            <div className="circle" id="cheyenne" onMouseOver={ ()=> setIsCheyenne(true) } onMouseLeave={ ()=> setIsCheyenne(false) }/>
            <div className="circle" id="aurora" onMouseOver={ ()=> setIsAurora(true) } onMouseLeave={ ()=> setIsAurora(false) }/>
            <div className="circle" id="coloradoSprings" onMouseOver={ ()=> setIsColoradoSprings(true) } onMouseLeave={ ()=> setIsColoradoSprings(false) }/>
            <div className="circle" id="clovis" onMouseOver={ ()=> setIsClovis(true) } onMouseLeave={ ()=> setIsClovis(false) }/>
            <div className="circle" id="albuqurque" onMouseOver={ ()=> setIsAlbuqurque(true) } onMouseLeave={ ()=> setIsAlbuqurque(false) }/>
            <div className="circle" id="alamogordo" onMouseOver={ ()=> setIsAlamogordo(true) } onMouseLeave={ ()=> setIsAlamogordo(false) }/>
            <div className="circle" id="greatFalls" onMouseOver={ ()=> setIsGreatFalls(true) } onMouseLeave={ ()=> setIsGreatFalls(false) }/>
            <div className="circle" id="spokane" onMouseOver={ ()=> setIsSpokane(true) } onMouseLeave={ ()=> setIsSpokane(false) }/>
            <div className="circle" id="takoma" onMouseOver={ ()=> setIsTakoma(true) } onMouseLeave={ ()=> setIsTakoma(false) }/>
            <div className="circle" id="mountainHome" onMouseOver={ ()=> setIsMountainHome(true) } onMouseLeave={ ()=> setIsMountainHome(false) }/>
            <div className="circle" id="ogden" onMouseOver={ ()=> setIsOgden(true) } onMouseLeave={ ()=> setIsOgden(false) }/>
            <div className="circle" id="marysville" onMouseOver={ ()=> setIsMarysville(true) } onMouseLeave={ ()=> setIsMarysville(false) }/>
            <div className="circle" id="travis" onMouseOver={ ()=> setIsTravis(true) } onMouseLeave={ ()=> setIsTravis(false) }/>
            <div className="circle" id="lasVegas" onMouseOver={ ()=> setIsLasVegas(true) } onMouseLeave={ ()=> setIsLasVegas(false) }/>
            <div className="circle" id="indianSprings" onMouseOver={ ()=> setIsIndianSprings(true) } onMouseLeave={ ()=> setIsIndianSprings(false) }/>
            <div className="circle" id="rosamond" onMouseOver={ ()=> setIsRosamond(true) } onMouseLeave={ ()=> setIsRosamond(false) }/>
            <div className="circle" id="lompoc" onMouseOver={ ()=> setIsLompoc(true) } onMouseLeave={ ()=> setIsLompoc(false) }/>
            <div className="circle" id="elSegundo" onMouseOver={ ()=> setIsElSegundo(true) } onMouseLeave={ ()=> setIsElSegundo(false) }/>
            <div className="circle" id="anchorage" onMouseOver={ ()=> setIsAnchorage(true) } onMouseLeave={ ()=> setIsAnchorage(false) }/>
            <div className="circle" id="fairbanks" onMouseOver={ ()=> setIsFairbanks(true) } onMouseLeave={ ()=> setIsFairbanks(false) }/>
            <div className="circle" id="honolulu" onMouseOver={ ()=> setIsHonolulu(true) } onMouseLeave={ ()=> setIsHonolulu(false) }/>

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
            { isCheyenne ? 
                <div className="baseNameCont" id="showCheyenne">
                <p>F.E. Warren,</p>
                <p>Cheyenne, WY</p>
                </div> 
            : <div></div> }
            { isAurora ? 
                <div className="baseNameCont" id="showAurora">
                <p>Buckley,</p>
                <p>Aurora, CO</p>
                </div> 
            : <div></div> }
            { isColoradoSprings ? 
                <div className="baseNameCont" id="showColoradoSprings">
                <p>Peterson,</p>
                <p>Colorado Springs, CO</p>
                </div> 
            : <div></div> }
            { isClovis ? 
                <div className="baseNameCont" id="showClovis">
                <p>Cannon,</p>
                <p>Clovis, NM</p>
                </div> 
            : <div></div> }
            { isAlbuqurque ? 
                <div className="baseNameCont" id="showAlbuqurque">
                <p>Kirtland,</p>
                <p>Albuqurque, NM</p>
                </div> 
            : <div></div> }
            { isAlamogordo ? 
                <div className="baseNameCont" id="showAlamogordo">
                <p>Holloman,</p>
                <p>Alamogordo, NM</p>
                </div> 
            : <div></div> }
            { isGreatFalls ? 
                <div className="baseNameCont" id="showGreatFalls">
                <p>Malmstrom,</p>
                <p>Great Falls, MT</p>
                </div> 
            : <div></div> }
            { isSpokane ? 
                <div className="baseNameCont" id="showSpokane">
                <p>Fairchild,</p>
                <p>Spokane, WA</p>
                </div> 
            : <div></div> }
            { isTakoma ? 
                <div className="baseNameCont" id="showTakoma">
                <p>Joint Base Lewis-McChord,</p>
                <p>Tacoma, WA</p>
                </div> 
            : <div></div> }
            { isMountainHome ? 
                <div className="baseNameCont" id="showMountainHome">
                <p>Mountain Home,</p>
                <p>Mountain Home, ID</p>
                </div> 
            : <div></div> }
            { isOgden ? 
                <div className="baseNameCont" id="showOgden">
                <p>Hill,</p>
                <p>Ogden, UT</p>
                </div> 
            : <div></div> }
            { isMarysville ? 
                <div className="baseNameCont" id="showMarysville">
                <p>Beale,</p>
                <p>Marysville, CA</p>
                </div> 
            : <div></div> }
            { isTravis ? 
                <div className="baseNameCont" id="showTravis">
                <p>Travis,</p>
                <p>Fairfield, CA</p>
                </div> 
            : <div></div> }
            { isLasVegas ? 
                <div className="baseNameCont" id="showLasVegas">
                <p>Nellis,</p>
                <p>Las Vegas, NV</p>
                </div> 
            : <div></div> }
            { isIndianSprings ? 
                <div className="baseNameCont" id="showIndianSprings">
                <p>Creech,</p>
                <p>Indian Springs, NV</p>
                </div> 
            : <div></div> }
            { isRosamond ? 
                <div className="baseNameCont" id="showRosamond">
                <p>Edwards,</p>
                <p>Rosamond, CA</p>
                </div> 
            : <div></div> }
            { isLompoc ? 
                <div className="baseNameCont" id="showLompoc">
                <p>Vandenberg,</p>
                <p>Lompoc, CA</p>
                </div> 
            : <div></div> }
            { isElSegundo ? 
                <div className="baseNameCont" id="showElSegundo">
                <p>Los Angeles,</p>
                <p>El Segundo, CA</p>
                </div> 
            : <div></div> }
            { isAnchorage ? 
                <div className="baseNameCont" id="showAnchorage">
                <p>Joint Base Elmendorf-Richardson,</p>
                <p>Anchorage, AK</p>
                </div> 
            : <div></div> }
            { isFairbanks ? 
                <div className="baseNameCont" id="showFairbanks">
                <p>Eielson,</p>
                <p>Fairbanks, AK</p>
                </div> 
            : <div></div> }
            { isHonolulu ? 
                <div className="baseNameCont" id="showHonolulu">
                <p>Joint Base Pearl Harbor-Hickam,</p>
                <p>Honolulu, HI</p>
                </div> 
            : <div></div> }
        </div>
    )
}
export default Default
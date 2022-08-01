import { useState, useEffect } from 'react';
import USAMap from "react-usa-map";
import Form from 'react-bootstrap/Form';

function Climate()
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

    const [dcColor, setDcColor] = useState('circle')
    const [bostonColor, setBostonColor] = useState('circle')
    const [trentonColor, setTrentonColor] = useState('circle')
    const [doverColor, setDoverColor] = useState('circle')
    const [hamptonColor, setHamptonColor] = useState('circle')
    const [goldsboroColor, setGoldsboroColor] = useState('circle')
    const [charlestonColor, setCharlestonColor] = useState('circle')
    const [sumterColor, setSumterColor] = useState('circle')
    const [tullahomaColor, setTullahomaColor] = useState('circle')
    const [columbusColor, setColumbusColor] = useState('circle')
    const [montgomeryColor, setMontgomeryColor] = useState('circle')
    const [valdostaColor, setValdostaColor] = useState('circle')
    const [maconColor, setMaconColor] = useState('circle')
    const [biloxiColor, setBiloxiColor] = useState('circle')
    const [valparaisoColor, setValparaisoColor] = useState('circle')
    const [panamaCityColor, setPanamaCityColor] = useState('circle')
    const [tampaColor, setTampaColor] = useState('circle')
    const [cocoaBeachColor, setCocoaBeachColor] = useState('circle')
    const [daytonColor, setDaytonColor] = useState('circle')
    const [bellevilleColor, setBellevilleColor] = useState('circle')
    const [knobNosterColor, setKnobNosterColor] = useState('circle')
    const [littleRockColor, setLittleRockColor] = useState('circle')
    const [minotColor, setMinotColor] = useState('circle')
    const [grandForksColor, setGrandForksColor] = useState('circle')
    const [offuttColor, setOffuttColor] = useState('circle')
    const [wichitaColor, setWichitaColor] = useState('circle')
    const [enidaColor, setEnidaColor] = useState('circle')
    const [oklahomaCityColor, setOklahomaCityColor] = useState('circle')
    const [altusColor, setAltusColor] = useState('circle')
    const [wichitaFallsColor, setWichitaFallsColor] = useState('circle')
    const [sanAngeloColor, setSanAngeloColor] = useState('circle')
    const [abileneColor, setAbileneColor] = useState('circle')
    const [delRioColor, setDelRioColor] = useState('circle')
    const [sanAntonioColor, setSanAntonioColor] = useState('circle')
    const [rapidCityColor, setRapidCityColor] = useState('circle')
    const [cheyenneColor, setCheyenneColor] = useState('circle')
    const [auroraColor, setAuroraColor] = useState('circle')
    const [coloradoSpringsColor, setColoradoSpringsColor] = useState('circle')
    const [clovisColor, setClovisColor] = useState('circle')
    const [albuqurqueColor, setAlbuquerqueColor] = useState('circle')
    const [alamogordoColor, setAlamogordoColor] = useState('circle')
    const [greatFallsColor, setGreatFallsColor] = useState('circle')
    const [spokaneColor, setSpokaneColor] = useState('circle')
    const [takomaColor, setTakomaColor] = useState('circle')
    const [mountainHomeColor, setMountainHomeColor] = useState('circle')
    const [ogdenColor, setOgdenColor] = useState('circle')
    const [marysvilleColor, setMarysvilleColor] = useState('circle')
    const [travisColor, setTravisColor] = useState('circle')
    const [lasVegasColor, setLasVegasColor] = useState('circle')
    const [indianSpringsColor, setIndianSpringsColor] = useState('circle')
    const [rosamondColor, setRosamondColor] = useState('circle')
    const [lompocColor, setLompocColor] = useState('circle')
    const [elSegundoColor, setElSegundoColor] = useState('circle')
    const [anchorageColor, setAnchorageColor] = useState('circle')
    const [fairbanksColor, setFairbanksColor] = useState('circle')
    const [honoluluColor, setHonoluluColor] = useState('circle')

    function findColor(temp, setter)
    {
        if (temp <= 0)
        {
            setter('circle white')
        }
        else if (temp > 0 && temp <= 32)
        {
            setter('circle lightBlue')
        }
        else if (temp > 32 && temp <= 40)
        {
            setter('circle blueish')
        }
        else if (temp > 40 && temp <= 50)
        {
            setter('circle blue')
        }
        else if (temp > 50 && temp <= 60)
        {
            setter('circle yellow')
        }
        else if (temp > 60 && temp <= 70)
        {
            setter('circle orange')
        }
        else if (temp > 70 && temp <= 80)
        {
            setter('circle reddish')
        }
        else if (temp > 80 && temp <= 90)
        {
            setter('circle red')
        }
        else
        {
            setter('circle black')
        }
    }

    const [season, setSeason] = useState(0)

    //summer, fall, winter, spring
    // july, oct, jan, april
    const dcTemp = [81, 61, 39, 58]
    const bostonTemp = [72, 60, 31, 51]
    const trentonTemp = [76, 61, 33, 53]
    const doverTemp = [80, 63, 36, 60]
    const hamptonTemp = [78, 67, 42, 61]
    const goldsboroTemp = [79, 66, 41, 60]
    const charlestonTemp = [81, 69, 51, 65]
    const sumterTemp = [79, 67, 43, 60]
    const tullahomaTemp = [77, 64, 40, 57]
    const columbusTemp = [75, 62, 32, 53]
    const montgomeryTemp = [81, 70, 50, 65]
    const valdostaTemp = [86, 71, 53, 65]
    const maconTemp = [81, 68, 49, 63]
    const biloxiTemp = [90, 78, 59, 77]
    const valparaisoTemp = [81, 71, 51, 64]
    const panamaCityTemp = [82, 72, 53, 66]
    const tampaTemp = [84, 77, 62, 74]
    const cocoaBeachTemp = [83, 78, 62, 72]
    const daytonTemp = [75, 62, 32, 54]
    const bellevilleTemp = [80, 62, 34, 55]
    const knobNosterTemp = [79, 60, 34, 56]
    const littleRockTemp = [81, 67, 43, 60]
    const minotTemp = [74, 49, 20, 39]
    const grandForksTemp = [73, 49, 18, 41]
    const offuttTemp = [78, 58, 29, 32]
    const wichitaTemp = [79, 62, 36, 55]
    const enidTemp = [80, 64, 38, 56]
    const oklahomaCityTemp = [80, 65, 39, 56]
    const altusTemp = [80, 65, 39, 56]
    const wichitaFallsTemp = [82, 69, 44, 61]
    const sanAngeloTemp = [82, 70, 47, 65]
    const abileneTemp = [82, 70, 46, 62]
    const delRioTemp = [88, 78, 54, 74]
    const sanAntonioTemp = [82, 73, 53, 71]
    const rapidCityTemp = [76, 51, 30, 43]
    const cheyenneTemp = [72, 49, 30, 41]
    const auroraTemp = [77, 54, 34, 46]
    const coloradoSpringsTemp = [73, 53, 32, 47]
    const clovisTemp = [74, 61, 36, 54]
    const albuqurqueTemp = [79, 58, 37, 57]
    const alamogordoTemp = [82, 68, 45, 67]
    const greatFallsTemp = [74, 48, 31, 42]
    const spokaneTemp = [78, 49, 34, 49]
    const tacomaTemp = [68, 53, 44, 53]
    const mountainHomeTemp = [84, 55, 36, 52]
    const ogdenTemp = [86, 53, 33, 51]
    const marysvilleTemp = [77, 62, 49, 62]
    const fairfieldTemp = [68, 62, 51, 59]
    const lasVegasTemp = [95, 68, 49, 71]
    const indianSpringsTemp = [95, 68, 49, 71]
    const rosamondTemp = [87, 60, 45, 63]
    const lompocTemp = [67, 61, 54, 58]
    const elSegundoTemp = [69, 66, 58, 61]
    const anchorageTemp = [67, 42, 24, 47]
    const fairbanksTemp = [63, 25, -6, 33]
    const honoluluTemp = [82, 80, 77, 76]

    useEffect(() =>
    {
        sendTempToColor(season)
    }, [])

    function sendTempToColor(whichSeason)
    {
        findColor(dcTemp[whichSeason], setDcColor)
        findColor(bostonTemp[whichSeason], setBostonColor)
        findColor(trentonTemp[whichSeason], setTrentonColor)
        findColor(doverTemp[whichSeason], setDoverColor)
        findColor(hamptonTemp[whichSeason], setHamptonColor)
        findColor(goldsboroTemp[whichSeason], setGoldsboroColor)
        findColor(charlestonTemp[whichSeason], setCharlestonColor)
        findColor(sumterTemp[whichSeason], setSumterColor)
        findColor(tullahomaTemp[whichSeason], setTullahomaColor)
        findColor(columbusTemp[whichSeason], setColumbusColor)
        findColor(montgomeryTemp[whichSeason], setMontgomeryColor)
        findColor(valdostaTemp[whichSeason], setValdostaColor)
        findColor(maconTemp[whichSeason], setMaconColor)
        findColor(biloxiTemp[whichSeason], setBiloxiColor)
        findColor(valparaisoTemp[whichSeason], setValparaisoColor)
        findColor(panamaCityTemp[whichSeason], setPanamaCityColor)
        findColor(tampaTemp[whichSeason], setTampaColor)
        findColor(cocoaBeachTemp[whichSeason], setCocoaBeachColor)
        findColor(daytonTemp[whichSeason], setDaytonColor)
        findColor(bellevilleTemp[whichSeason], setBellevilleColor)
        findColor(knobNosterTemp[whichSeason], setKnobNosterColor)
        findColor(littleRockTemp[whichSeason], setLittleRockColor)
        findColor(minotTemp[whichSeason], setMinotColor)
        findColor(grandForksTemp[whichSeason], setGrandForksColor)
        findColor(offuttTemp[whichSeason], setOffuttColor)
        findColor(wichitaTemp[whichSeason], setWichitaColor)
        findColor(enidTemp[whichSeason], setEnidaColor)
        findColor(oklahomaCityTemp[whichSeason], setOklahomaCityColor)
        findColor(altusTemp[whichSeason], setAltusColor)
        findColor(wichitaFallsTemp[whichSeason], setWichitaFallsColor)
        findColor(sanAngeloTemp[whichSeason], setSanAngeloColor)
        findColor(abileneTemp[whichSeason], setAbileneColor)
        findColor(delRioTemp[whichSeason], setDelRioColor)
        findColor(sanAntonioTemp[whichSeason], setSanAntonioColor)
        findColor(rapidCityTemp[whichSeason], setRapidCityColor)
        findColor(cheyenneTemp[whichSeason], setCheyenneColor)
        findColor(auroraTemp[whichSeason], setAuroraColor)
        findColor(coloradoSpringsTemp[whichSeason], setColoradoSpringsColor)
        findColor(clovisTemp[whichSeason], setClovisColor)
        findColor(albuqurqueTemp[whichSeason], setAlbuquerqueColor)
        findColor(alamogordoTemp[whichSeason], setAlamogordoColor)
        findColor(greatFallsTemp[whichSeason], setGreatFallsColor)
        findColor(spokaneTemp[whichSeason], setSpokaneColor)
        findColor(tacomaTemp[whichSeason], setTakomaColor)
        findColor(mountainHomeTemp[whichSeason], setMountainHomeColor)
        findColor(ogdenTemp[whichSeason], setOgdenColor)
        findColor(marysvilleTemp[whichSeason], setMarysvilleColor)
        findColor(fairfieldTemp[whichSeason], setTravisColor)
        findColor(lasVegasTemp[whichSeason], setLasVegasColor)
        findColor(indianSpringsTemp[whichSeason], setIndianSpringsColor)
        findColor(rosamondTemp[whichSeason], setRosamondColor)
        findColor(lompocTemp[whichSeason], setLompocColor)
        findColor(elSegundoTemp[whichSeason], setElSegundoColor)
        findColor(anchorageTemp[whichSeason], setAnchorageColor)
        findColor(fairbanksTemp[whichSeason], setFairbanksColor)
        findColor(honoluluTemp[whichSeason], setHonoluluColor)
    }

    function clickSummer()
    {
        setSeason(0)
        sendTempToColor(0)
    }

    function clickFall()
    {
        setSeason(1)
        sendTempToColor(1)
    }

    function clickWinter()
    {
        setSeason(2)
        sendTempToColor(2)
    }
    function clickSpring()
    {
        setSeason(3)
        sendTempToColor(3)
    }
    
    const less0 = "< 0°"
    const to32 = "0° - 32°"
    const to40 = "33° - 40°"
    const to50 = "41° - 50°"
    const to60 = "51° - 60°"
    const to70 = "61° - 70°"
    const to80 = "71° - 80°"
    const to90 = "81° - 90°"
    const greater90 = "> 90°"

    return (
        <div className="mapContainer">

            <div id="climateButtons">
                <Form id="climateForm">
                {['radio'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                        inline
                        label="Summer"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                        onClick={ clickSummer }
                        defaultChecked
                    />
                    <Form.Check
                        inline
                        label="Fall"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                        onClick={ clickFall }
                    />
                    <Form.Check
                        inline
                        label="Winter"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                        onClick={ clickWinter }
                    />
                    <Form.Check
                        inline
                        label="Spring"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                        onClick={ clickSpring }
                    />
                    </div>
                ))}
                </Form>

                <div>
                    <div>
                        <div className="bahCube"></div>
                        <p>{ less0 }</p>
                    </div>
                    <div>
                        <div className="bahCube lightBlue"></div>
                        <p>{ to32 }</p>
                    </div>
                    <div>
                        <div className="bahCube blueish"></div>
                        <p>{ to40 }</p>
                    </div>
                    <div>
                        <div className="bahCube blue"></div>
                        <p>{ to50 }</p>
                    </div>
                    <div>
                        <div className="bahCube yellow"></div>
                        <p>{ to60 }</p>
                    </div>
                    <div>
                        <div className="bahCube orange"></div>
                        <p>{ to70 }</p>
                    </div>
                    <div>
                        <div className="bahCube reddish"></div>
                        <p>{ to80 }</p>
                    </div>
                    <div>
                        <div className="bahCube red"></div>
                        <p>{ to90 }</p>
                    </div>
                    <div>
                        <div className="bahCube black"></div>
                        <p>{ greater90 }</p>
                    </div>
                </div>

            </div>


            {/* <USAMap customize={statesCustomConfig()} onClick={mapHandler} /> */}
            <USAMap />
            <div className={ dcColor } id="dc" onMouseOver={ ()=> setIsDc(true) } onMouseLeave={ ()=> setIsDc(false) } />
            <div className={ bostonColor } id="boston" onMouseOver={ ()=> setIsBoston(true) } onMouseLeave={ ()=> setIsBoston(false) }/>
            <div className={ trentonColor } id="trenton" onMouseOver={ ()=> setIsTrenton(true) } onMouseLeave={ ()=> setIsTrenton(false) }/>
            <div className={ doverColor } id="dover" onMouseOver={ ()=> setIsDover(true) } onMouseLeave={ ()=> setIsDover(false) }/>
            <div className={ hamptonColor } id="hampton" onMouseOver={ ()=> setIsHampton(true) } onMouseLeave={ ()=> setIsHampton(false) }/>
            <div className={ goldsboroColor } id="goldsboro" onMouseOver={ ()=> setIsGoldsboro(true) } onMouseLeave={ ()=> setIsGoldsboro(false) }/>
            <div className={ charlestonColor } id="charleston" onMouseOver={ ()=> setIsCharleston(true) } onMouseLeave={ ()=> setIsCharleston(false) }/>
            <div className={ sumterColor } id="sumter" onMouseOver={ ()=> setIsSumter(true) } onMouseLeave={ ()=> setIsSumter(false) }/>
            <div className={ tullahomaColor } id="tullahoma" onMouseOver={ ()=> setIsTullahoma(true) } onMouseLeave={ ()=> setIsTullahoma(false) }/>
            <div className={ columbusColor } id="columbus" onMouseOver={ ()=> setIsColumbus(true) } onMouseLeave={ ()=> setIsColumbus(false) }/>
            <div className={ montgomeryColor } id="montgomery" onMouseOver={ ()=> setIsMontgomery(true) } onMouseLeave={ ()=> setIsMontgomery(false) }/>
            <div className={ valdostaColor } id="valdosta" onMouseOver={ ()=> setIsValdosta(true) } onMouseLeave={ ()=> setIsValdosta(false) }/>
            <div className={ maconColor } id="macon" onMouseOver={ ()=> setIsMacon(true) } onMouseLeave={ ()=> setIsMacon(false) }/>
            <div className={ biloxiColor } id="biloxi" onMouseOver={ ()=> setIsBiloxi(true) } onMouseLeave={ ()=> setIsBiloxi(false) }/>
            <div className={ valparaisoColor } id="valparaiso" onMouseOver={ ()=> setIsValparaiso(true) } onMouseLeave={ ()=> setIsValparaiso(false) }/>
            <div className={ panamaCityColor } id="panamaCity" onMouseOver={ ()=> setIsPanamaCity(true) } onMouseLeave={ ()=> setIsPanamaCity(false) }/>
            <div className={ tampaColor } id="tampa" onMouseOver={ ()=> setIsTampa(true) } onMouseLeave={ ()=> setIsTampa(false) }/>
            <div className={ cocoaBeachColor } id="cocoaBeach" onMouseOver={ ()=> setIsCocoaBeach(true) } onMouseLeave={ ()=> setIsCocoaBeach(false) }/>
            <div className={ daytonColor } id="dayton" onMouseOver={ ()=> setIsDayton(true) } onMouseLeave={ ()=> setIsDayton(false) }/>
            <div className={ bellevilleColor } id="belleville" onMouseOver={ ()=> setIsBelleville(true) } onMouseLeave={ ()=> setIsBelleville(false) }/>
            <div className={ knobNosterColor } id="knobNoster" onMouseOver={ ()=> setIsKnobNoster(true) } onMouseLeave={ ()=> setIsKnobNoster(false) }/>
            <div className={ littleRockColor } id="littleRock" onMouseOver={ ()=> setIsLittleRock(true) } onMouseLeave={ ()=> setIsLittleRock(false) }/>
            <div className={ minotColor } id="minot" onMouseOver={ ()=> setIsMinot(true) } onMouseLeave={ ()=> setIsMinot(false) }/>
            <div className={ grandForksColor } id="grandForks" onMouseOver={ ()=> setIsGrandForks(true) } onMouseLeave={ ()=> setIsGrandForks(false) }/>
            <div className={ offuttColor } id="offutt" onMouseOver={ ()=> setIsOffutt(true) } onMouseLeave={ ()=> setIsOffutt(false) }/>
            <div className={ wichitaColor } id="wichita" onMouseOver={ ()=> setIsWichita(true) } onMouseLeave={ ()=> setIsWichita(false) }/>
            <div className={ enidaColor } id="enida" onMouseOver={ ()=> setIsEnida(true) } onMouseLeave={ ()=> setIsEnida(false) } />
            <div className={ oklahomaCityColor } id="oklahomaCity" onMouseOver={ ()=> setIsOklahoma(true) } onMouseLeave={ ()=> setIsOklahoma(false) } />
            <div className={ altusColor } id="altus" onMouseOver={ ()=> setIsAltus(true) } onMouseLeave={ ()=> setIsAltus(false) } />
            <div className={ wichitaFallsColor } id="wichitaFalls" onMouseOver={ ()=> setIsWichitaFalls(true) } onMouseLeave={ ()=> setIsWichitaFalls(false) } />
            <div className={ sanAngeloColor } id="sanAngelo" onMouseOver={ ()=> setIsSanAngelo(true) } onMouseLeave={ ()=> setIsSanAngelo(false) } />
            <div className={ abileneColor } id="abilene" onMouseOver={ ()=> setIsAbilene(true) } onMouseLeave={ ()=> setIsAbilene(false) }/>
            <div className={ delRioColor } id="delRio" onMouseOver={ ()=> setIsDelRio(true) } onMouseLeave={ ()=> setIsDelRio(false) }/>
            <div className={ sanAntonioColor } id="sanAntonio" onMouseOver={ ()=> setIsSanAntonio(true) } onMouseLeave={ ()=> setIsSanAntonio(false) }/>
            <div className={ rapidCityColor } id="rapidCity" onMouseOver={ ()=> setIsRapidCity(true) } onMouseLeave={ ()=> setIsRapidCity(false) }/>
            <div className={ cheyenneColor } id="cheyenne" onMouseOver={ ()=> setIsCheyenne(true) } onMouseLeave={ ()=> setIsCheyenne(false) }/>
            <div className={ auroraColor } id="aurora" onMouseOver={ ()=> setIsAurora(true) } onMouseLeave={ ()=> setIsAurora(false) }/>
            <div className={ coloradoSpringsColor } id="coloradoSprings" onMouseOver={ ()=> setIsColoradoSprings(true) } onMouseLeave={ ()=> setIsColoradoSprings(false) }/>
            <div className={ clovisColor } id="clovis" onMouseOver={ ()=> setIsClovis(true) } onMouseLeave={ ()=> setIsClovis(false) }/>
            <div className={ albuqurqueColor } id="albuqurque" onMouseOver={ ()=> setIsAlbuqurque(true) } onMouseLeave={ ()=> setIsAlbuqurque(false) }/>
            <div className={ alamogordoColor } id="alamogordo" onMouseOver={ ()=> setIsAlamogordo(true) } onMouseLeave={ ()=> setIsAlamogordo(false) }/>
            <div className={ greatFallsColor } id="greatFalls" onMouseOver={ ()=> setIsGreatFalls(true) } onMouseLeave={ ()=> setIsGreatFalls(false) }/>
            <div className={ spokaneColor } id="spokane" onMouseOver={ ()=> setIsSpokane(true) } onMouseLeave={ ()=> setIsSpokane(false) }/>
            <div className={ takomaColor } id="takoma" onMouseOver={ ()=> setIsTakoma(true) } onMouseLeave={ ()=> setIsTakoma(false) }/>
            <div className={ mountainHomeColor } id="mountainHome" onMouseOver={ ()=> setIsMountainHome(true) } onMouseLeave={ ()=> setIsMountainHome(false) }/>
            <div className={ ogdenColor } id="ogden" onMouseOver={ ()=> setIsOgden(true) } onMouseLeave={ ()=> setIsOgden(false) }/>
            <div className={ marysvilleColor } id="marysville" onMouseOver={ ()=> setIsMarysville(true) } onMouseLeave={ ()=> setIsMarysville(false) }/>
            <div className={ travisColor } id="travis" onMouseOver={ ()=> setIsTravis(true) } onMouseLeave={ ()=> setIsTravis(false) }/>
            <div className={ lasVegasColor } id="lasVegas" onMouseOver={ ()=> setIsLasVegas(true) } onMouseLeave={ ()=> setIsLasVegas(false) }/>
            <div className={ indianSpringsColor } id="indianSprings" onMouseOver={ ()=> setIsIndianSprings(true) } onMouseLeave={ ()=> setIsIndianSprings(false) }/>
            <div className={ rosamondColor } id="rosamond" onMouseOver={ ()=> setIsRosamond(true) } onMouseLeave={ ()=> setIsRosamond(false) }/>
            <div className={ lompocColor } id="lompoc" onMouseOver={ ()=> setIsLompoc(true) } onMouseLeave={ ()=> setIsLompoc(false) }/>
            <div className={ elSegundoColor } id="elSegundo" onMouseOver={ ()=> setIsElSegundo(true) } onMouseLeave={ ()=> setIsElSegundo(false) }/>
            <div className={ anchorageColor } id="anchorage" onMouseOver={ ()=> setIsAnchorage(true) } onMouseLeave={ ()=> setIsAnchorage(false) }/>
            <div className={ fairbanksColor } id="fairbanks" onMouseOver={ ()=> setIsFairbanks(true) } onMouseLeave={ ()=> setIsFairbanks(false) }/>
            <div className={ honoluluColor } id="honolulu" onMouseOver={ ()=> setIsHonolulu(true) } onMouseLeave={ ()=> setIsHonolulu(false) }/>
            
            { isDc ? 
                <div className="baseNameCont" id="showDc">
                <p>Joint Base Andrews</p>
                <p>{ dcTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isBoston ? 
                <div className="baseNameCont" id="showBoston">
                <p>Hanscom</p>
                <p>{ bostonTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isTrenton ? 
                <div className="baseNameCont" id="showTrenton">
                <p>Joint Base Mcguire-Dix-Lakehurst</p>
                <p>{ trentonTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isDover ? 
                <div className="baseNameCont" id="showDover">
                <p>Dover</p>
                <p>{ doverTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isHampton ? 
                <div className="baseNameCont" id="showHampton">
                <p>Joint Base Langely-Eustis</p>
                <p>{ hamptonTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isGoldsboro ? 
                <div className="baseNameCont" id="showGoldsboro">
                <p>Seymour-Johnson</p>
                <p>{ goldsboroTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isCharleston ? 
                <div className="baseNameCont" id="showCharleston">
                <p>Joint Base Charleston</p>
                <p>{ charlestonTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isSumter ? 
                <div className="baseNameCont" id="showSumter">
                <p>Shaw</p>
                <p>{ sumterTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isTullahoma ? 
                <div className="baseNameCont" id="showTullahoma">
                <p>Arnold</p>
                <p>{ tullahomaTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isColumbus ? 
                <div className="baseNameCont" id="showColumbus">
                <p>Columbus</p>
                <p>{ columbusTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isMontgomery ? 
                <div className="baseNameCont" id="showMontgomery">
                <p>Maxwell</p>
                <p>{ montgomeryTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isValdosta ? 
                <div className="baseNameCont" id="showValdosta">
                <p>Moody</p>
                <p>{ valdostaTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isMacon ? 
                <div className="baseNameCont" id="showMacon">
                <p>Robins</p>
                <p>{ maconTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isBiloxi ? 
                <div className="baseNameCont" id="showBiloxi">
                <p>Keesler</p>
                <p>{ biloxiTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isValparaiso ? 
                <div className="baseNameCont" id="showValparaiso">
                <p>Eglin</p>
                <p>{ valparaisoTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isPanamaCity ? 
                <div className="baseNameCont" id="showPanamaCity">
                <p>Tyndall</p>
                <p>{ panamaCityTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isTampa ? 
                <div className="baseNameCont" id="showTampa">
                <p>Macdill</p>
                <p>{ tampaTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isCocoaBeach ? 
                <div className="baseNameCont" id="showCocoaBeach">
                <p>Patrick</p>
                <p>{ cocoaBeachTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isDayton ? 
                <div className="baseNameCont" id="showDayton">
                <p>Wright-Patterson</p>
                <p>{ daytonTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isBelleville ? 
                <div className="baseNameCont" id="showBelleville">
                <p>Scott</p>
                <p>{ bellevilleTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isKnobNoster ? 
                <div className="baseNameCont" id="showKnobNoster">
                <p>Whiteman</p>
                <p>{ knobNosterTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isLittleRock ? 
                <div className="baseNameCont" id="showLittleRock">
                <p>Little Rock</p>
                <p>{ littleRockTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isMinot ? 
                <div className="baseNameCont" id="showMinot">
                <p>Minot</p>
                <p>{ minotTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isGrandForks ? 
                <div className="baseNameCont" id="showGrandForks">
                <p>Grand Forks</p>
                <p>{ grandForksTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isOffutt ? 
                <div className="baseNameCont" id="showOffutt">
                <p>Offutt</p>
                <p>{ offuttTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isWichita ? 
                <div className="baseNameCont" id="showWichita">
                <p>McConnell</p>
                <p>{ wichitaTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isEnida ? 
                <div className="baseNameCont" id="showEnida">
                <p>Vance</p>
                <p>{ enidTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isOklahomaCity ? 
                <div className="baseNameCont" id="showOklahomaCity">
                <p>Tinker</p>
                <p>{ oklahomaCityTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isAltus ? 
                <div className="baseNameCont" id="showAltus">
                <p>Altus</p>
                <p>{ altusTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isWichitaFalls ? 
                <div className="baseNameCont" id="showWichitaFalls">
                <p>Sheppard</p>
                <p>{ wichitaFallsTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isSanAngelo ? 
                <div className="baseNameCont" id="showSanAngelo">
                <p>Goodfellow</p>
                <p>{ sanAngeloTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isAbilene ? 
                <div className="baseNameCont" id="showAbilene">
                <p>Dyess</p>
                <p>{ abileneTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isDelRio ? 
                <div className="baseNameCont" id="showDelRio">
                <p>Laughlin</p>
                <p>{ delRioTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isSanAntonio ? 
                <div className="baseNameCont" id="showSanAntonio">
                <p>Joint Base San Antonio-Lackland/Joint Base San Antonio-Randolph,</p>
                <p>{ sanAntonioTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isRapidCity ? 
                <div className="baseNameCont" id="showRapidCity">
                <p>Ellsworth</p>
                <p>{ rapidCityTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isCheyenne ? 
                <div className="baseNameCont" id="showCheyenne">
                <p>F.E. Warren</p>
                <p>{ cheyenneTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isAurora ? 
                <div className="baseNameCont" id="showAurora">
                <p>Buckley</p>
                <p>{ auroraTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isColoradoSprings ? 
                <div className="baseNameCont" id="showColoradoSprings">
                <p>Peterson</p>
                <p>{ coloradoSpringsTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isClovis ? 
                <div className="baseNameCont" id="showClovis">
                <p>Cannon</p>
                <p>{ clovisTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isAlbuqurque ? 
                <div className="baseNameCont" id="showAlbuqurque">
                <p>Kirtland</p>
                <p>{ albuqurqueTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isAlamogordo ? 
                <div className="baseNameCont" id="showAlamogordo">
                <p>Holloman</p>
                <p>{ alamogordoTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isGreatFalls ? 
                <div className="baseNameCont" id="showGreatFalls">
                <p>Malmstrom</p>
                <p>{ greatFallsTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isSpokane ? 
                <div className="baseNameCont" id="showSpokane">
                <p>Fairchild</p>
                <p>{ spokaneTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isTakoma ? 
                <div className="baseNameCont" id="showTakoma">
                <p>Joint Base Lewis-McChord</p>
                <p>{ tacomaTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isMountainHome ? 
                <div className="baseNameCont" id="showMountainHome">
                <p>Mountain Home</p>
                <p>{ mountainHomeTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isOgden ? 
                <div className="baseNameCont" id="showOgden">
                <p>Hill</p>
                <p>{ ogdenTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isMarysville ? 
                <div className="baseNameCont" id="showMarysville">
                <p>Beale</p>
                <p>{ marysvilleTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isTravis ? 
                <div className="baseNameCont" id="showTravis">
                <p>Travis</p>
                <p>{ fairfieldTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isLasVegas ? 
                <div className="baseNameCont" id="showLasVegas">
                <p>Nellis</p>
                <p>{ lasVegasTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isIndianSprings ? 
                <div className="baseNameCont" id="showIndianSprings">
                <p>Creech</p>
                <p>{ indianSpringsTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isRosamond ? 
                <div className="baseNameCont" id="showRosamond">
                <p>Edwards</p>
                <p>{ rosamondTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isLompoc ? 
                <div className="baseNameCont" id="showLompoc">
                <p>Vandenberg</p>
                <p>{ lompocTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isElSegundo ? 
                <div className="baseNameCont" id="showElSegundo">
                <p>Los Angeles</p>
                <p>{ elSegundoTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isAnchorage ? 
                <div className="baseNameCont" id="showAnchorage">
                <p>Joint Base Elmendorf-Richardson</p>
                <p>{ anchorageTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isFairbanks ? 
                <div className="baseNameCont" id="showFairbanks">
                <p>Eielson</p>
                <p>{ fairbanksTemp[season] }°</p>
                </div> 
            : <div></div> }
            { isHonolulu ? 
                <div className="baseNameCont" id="showHonolulu">
                <p>Joint Base Pearl Harbor-Hickam</p>
                <p>{ honoluluTemp[season] }°</p>
                </div> 
            : <div></div> }
        </div>
    )
}
export default Climate
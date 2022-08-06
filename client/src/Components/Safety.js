import { useEffect, useState } from 'react';
import USAMap from "react-usa-map";
import Form from 'react-bootstrap/Form';

function Safety()
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


    //neighborhood scout out of 100, crime grade, area vibes
    const dcSafety = [5, "C", "F"]
    const bostonSafety = [19, "B", "F"]
    const trentonSafety = [14, "D", "F"]
    const doverSafety = [4, "D", "F"]
    const hamptonSafety = [18, "C", "D"]
    const goldsboroSafety = [2, "D", "F"]
    const charlestonSafety = [18, "D", "D"]
    const sumterSafety = [5, "D", "F"]
    const tullahomaSafety = [12, "C", "F"]
    const columbusSafety = [40, "D", "F"]
    const montgomerySafety = [9, "D", "F"]
    const valdostaSafety = [9, "D", "F"]
    const maconSafety = [6, "D", "F"]
    const biloxiSafety = [3, "D", "F"]
    const valparaisoSafety = [89, "B", "A"]
    const panamaCitySafety = [3, "C", "F"]
    const tampaSafety = [25, "C", "D"]
    const cocoaBeachSafety = [17, "C", "D"]
    const daytonSafety = [4, "C", "F"]
    const bellevilleSafety = [16, "C", "F"]
    const knobNosterSafety = [56, "C", "A"]
    const littleRockSafety = [1, "D", "F"]
    const minotSafety = [29, "C", "D"]
    const grandForksSafety = [19, "B", "C"]
    const offuttSafety = [30, "D", "B"]
    const wichitaSafety = [2, "D", "F"]
    const enidSafety = [13, "D", "F"]
    const oklahomaCitySafety = [5, "D", "F"]
    const altusSafety = [23, "D", "B"]
    const wichitaFallSafety = [10, "D", "D"]
    const sanAngeloSafety = [11, "D", "D"]
    const abileneSafety = [20, "D", "D"]
    const delRioSafety = [33, "D", "A"]
    const sanAntonioSafety = [4, "C", "F"]
    const rapidCitySafety = [3, "C", "F"]
    const cheyenneSafety = [9, "D", "F"]
    const auroraSafety = [6, "C", "F"]
    const coloradoSpringsSafety = [7, "F"]
    const clovisSafety = [7, "D", "F"]
    const albuqurqueSafety = [2, "D", "F"]
    const alamogordoSafety = [19, "D", "D"]
    const greatFallsSafety = [3, "D", "F"]
    const spokaneSafety = [3, "D", "F"]
    const tacomaSafety = [1, "D", "F"]
    const mountainHomeSafety = [63, "D", "B"]
    const ogdenSafety = [8, "C", "F"]
    const marysvilleSafety = [3, "D", "F"]
    const fairfieldSafety = [15, "D", "D"]
    const lasVegasSafety = [16, "D", "F"]
    const indianSpringsSafety = [16, "F", "F"]
    const rosamondSafety = [22, "D", "F"]
    const lompocSafety = [17, "D", "F"]
    const elSegundoSafety = [3, "C", "F"]
    const anchorageSafety = [5, "D", "F"]
    const fairbanksSafety = [4, "D", "F"]
    const honoluluSafety = [14, "A", "D"]

    const [choice, setChoice] = useState(0)

    useEffect(() =>
    {
        sendChoiceToColor(choice)
    })

    function clickScout()
    {
        setChoice(0) 
        sendChoiceToColor(0)
    }

    function clickCrime()
    {
        setChoice(1)
        sendChoiceToColor(1)
    }

    function clickArea()
    {
        setChoice(2)
        sendChoiceToColor(2)
    }

    function sendChoiceToColor(whichChoice)
    {
        findColor(dcSafety[whichChoice], setDcColor)
        findColor(bostonSafety[whichChoice], setBostonColor)
        findColor(trentonSafety[whichChoice], setTrentonColor)
        findColor(doverSafety[whichChoice], setDoverColor)
        findColor(hamptonSafety[whichChoice], setHamptonColor)
        findColor(goldsboroSafety[whichChoice], setGoldsboroColor)
        findColor(charlestonSafety[whichChoice], setCharlestonColor)
        findColor(sumterSafety[whichChoice], setSumterColor)
        findColor(tullahomaSafety[whichChoice], setTullahomaColor)
        findColor(columbusSafety[whichChoice], setColumbusColor)
        findColor(montgomerySafety[whichChoice], setMontgomeryColor)
        findColor(valdostaSafety[whichChoice], setValdostaColor)
        findColor(maconSafety[whichChoice], setMaconColor)
        findColor(biloxiSafety[whichChoice], setBiloxiColor)
        findColor(valparaisoSafety[whichChoice], setValparaisoColor)
        findColor(panamaCitySafety[whichChoice], setPanamaCityColor)
        findColor(tampaSafety[whichChoice], setTampaColor)
        findColor(cocoaBeachSafety[whichChoice], setCocoaBeachColor)
        findColor(daytonSafety[whichChoice], setDaytonColor)
        findColor(bellevilleSafety[whichChoice], setBellevilleColor)
        findColor(knobNosterSafety[whichChoice], setKnobNosterColor)
        findColor(littleRockSafety[whichChoice], setLittleRockColor)
        findColor(minotSafety[whichChoice], setMinotColor)
        findColor(grandForksSafety[whichChoice], setGrandForksColor)
        findColor(offuttSafety[whichChoice], setOffuttColor)
        findColor(wichitaSafety[whichChoice], setWichitaColor)
        findColor(enidSafety[whichChoice], setEnidaColor)
        findColor(oklahomaCitySafety[whichChoice], setOklahomaCityColor)
        findColor(altusSafety[whichChoice], setAltusColor)
        findColor(wichitaFallSafety[whichChoice], setWichitaFallsColor)
        findColor(sanAngeloSafety[whichChoice], setSanAngeloColor)
        findColor(abileneSafety[whichChoice], setAbileneColor)
        findColor(delRioSafety[whichChoice], setDelRioColor)
        findColor(sanAntonioSafety[whichChoice], setSanAntonioColor)
        findColor(rapidCitySafety[whichChoice], setRapidCityColor)
        findColor(cheyenneSafety[whichChoice], setCheyenneColor)
        findColor(auroraSafety[whichChoice], setAuroraColor)
        findColor(coloradoSpringsSafety[whichChoice], setColoradoSpringsColor)
        findColor(clovisSafety[whichChoice], setClovisColor)
        findColor(albuqurqueSafety[whichChoice], setAlbuquerqueColor)
        findColor(alamogordoSafety[whichChoice], setAlamogordoColor)
        findColor(greatFallsSafety[whichChoice], setGreatFallsColor)
        findColor(spokaneSafety[whichChoice], setSpokaneColor)
        findColor(tacomaSafety[whichChoice], setTakomaColor)
        findColor(mountainHomeSafety[whichChoice], setMountainHomeColor)
        findColor(ogdenSafety[whichChoice], setOgdenColor)
        findColor(marysvilleSafety[whichChoice], setMarysvilleColor)
        findColor(fairfieldSafety[whichChoice], setTravisColor)
        findColor(lasVegasSafety[whichChoice], setLasVegasColor)
        findColor(indianSpringsSafety[whichChoice], setIndianSpringsColor)
        findColor(rosamondSafety[whichChoice], setRosamondColor)
        findColor(lompocSafety[whichChoice], setLompocColor)
        findColor(elSegundoSafety[whichChoice], setElSegundoColor)
        findColor(anchorageSafety[whichChoice], setAnchorageColor)
        findColor(fairbanksSafety[whichChoice], setFairbanksColor)
        findColor(honoluluSafety[whichChoice], setHonoluluColor)
    }

    function findColor(grade, setter)
    {
        if (grade <= 20 || grade === "F")
        {
            setter("circle red")
        }
        else if (grade > 20 && grade <= 40 || grade === "D")
        {
            setter("circle orange")
        }
        else if (grade > 40 && grade <= 60 || grade === "C")
        {
            setter("circle yellow")
        }
        else if (grade > 60 && grade <= 80 || grade === "B")
        {
            setter("circle greenYellow")
        }
        else if (grade > 80 && grade <= 100 || grade === "A")
        {
            setter("circle green")
        }
    }

    const to20 = "0 - 20 or F"
    const to40 = "21 - 40 or D"
    const to60 = "41 - 60 or C"
    const to80 = "61 - 80 or B"
    const to100 = "81 - 100 or A"

    return (
        <div className="mapContainer">

            <div id="safetyButtons">
                <Form id="safetyForm">
                {['radio'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                            inline
                            label="Neighborhood Scout"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                            onClick={ clickScout }
                            defaultChecked
                        />
                        <Form.Check
                            inline
                            label="Crime Grade"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                            onClick={ clickCrime }
                        />
                        <Form.Check
                            inline
                            label="Area Vibes"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                            onClick={ clickArea }
                        />
                    </div>
                    ))}
                </Form>

                <div>
                    <div>
                        <div className="bahCube green"></div>
                        <p>{ to100 }</p>
                    </div>
                    <div>
                        <div className="bahCube greenYellow"></div>
                        <p>{ to80 }</p>
                    </div>
                    <div>
                        <div className="bahCube yellow"></div>
                        <p>{ to60 }</p>
                    </div>
                    <div>
                        <div className="bahCube orange"></div>
                        <p>{ to40 }</p>
                    </div>
                    <div>
                        <div className="bahCube red"></div>
                        <p>{ to20 }</p>
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
                    <p>{ dcSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isBoston ? 
                <div className="baseNameCont" id="showBoston">
                    <p>Hanscom</p>
                    <p>{ bostonSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isTrenton ? 
                <div className="baseNameCont" id="showTrenton">
                    <p>Joint Base Mcguire-Dix-Lakehurst</p>
                    <p>{ trentonSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isDover ? 
                <div className="baseNameCont" id="showDover">
                    <p>Dover</p>
                    <p>{ doverSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isHampton ? 
                <div className="baseNameCont" id="showHampton">
                    <p>Joint Base Langely-Eustis</p>
                    <p>{ hamptonSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isGoldsboro ? 
                <div className="baseNameCont" id="showGoldsboro">
                    <p>Seymour-Johnson</p>
                    <p>{ goldsboroSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isCharleston ? 
                <div className="baseNameCont" id="showCharleston">
                    <p>Joint Base Charleston</p>
                    <p>{ charlestonSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isSumter ? 
                <div className="baseNameCont" id="showSumter">
                    <p>Shaw</p>
                    <p>{ sumterSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isTullahoma ? 
                <div className="baseNameCont" id="showTullahoma">
                    <p>Arnold</p>
                    <p>{ tullahomaSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isColumbus ? 
                <div className="baseNameCont" id="showColumbus">
                    <p>Columbus</p>
                    <p>{ columbusSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isMontgomery ? 
                <div className="baseNameCont" id="showMontgomery">
                    <p>Maxwell</p>
                    <p>{ montgomerySafety[choice] }</p>
                </div> 
            : <div></div> }
            { isValdosta ? 
                <div className="baseNameCont" id="showValdosta">
                    <p>Moody</p>
                    <p>{ valdostaSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isMacon ? 
                <div className="baseNameCont" id="showMacon">
                    <p>Robins</p>
                    <p>{ maconSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isBiloxi ? 
                <div className="baseNameCont" id="showBiloxi">
                    <p>Keesler</p>
                    <p>{ biloxiSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isValparaiso ? 
                <div className="baseNameCont" id="showValparaiso">
                    <p>Eglin</p>
                    <p>{ valparaisoSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isPanamaCity ? 
                <div className="baseNameCont" id="showPanamaCity">
                    <p>Tyndall</p>
                    <p>{ panamaCitySafety[choice] }</p>
                </div> 
            : <div></div> }
            { isTampa ? 
                <div className="baseNameCont" id="showTampa">
                    <p>Macdill</p>
                    <p>{ tampaSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isCocoaBeach ? 
                <div className="baseNameCont" id="showCocoaBeach">
                    <p>Patrick</p>
                    <p>{ cocoaBeachSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isDayton ? 
                <div className="baseNameCont" id="showDayton">
                    <p>Wright-Patterson</p>
                    <p>{ daytonSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isBelleville ? 
                <div className="baseNameCont" id="showBelleville">
                    <p>Scott</p>
                    <p>{ bellevilleSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isKnobNoster ? 
                <div className="baseNameCont" id="showKnobNoster">
                    <p>Whiteman</p>
                    <p>{ knobNosterSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isLittleRock ? 
                <div className="baseNameCont" id="showLittleRock">
                    <p>Little Rock</p>
                    <p>{ littleRockSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isMinot ? 
                <div className="baseNameCont" id="showMinot">
                    <p>Minot</p>
                    <p>{ minotSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isGrandForks ? 
                <div className="baseNameCont" id="showGrandForks">
                    <p>Grand Forks</p>
                    <p>{ grandForksSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isOffutt ? 
                <div className="baseNameCont" id="showOffutt">
                    <p>Offutt</p>
                    <p>{ offuttSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isWichita ? 
                <div className="baseNameCont" id="showWichita">
                    <p>McConnell</p>
                    <p>{ wichitaSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isEnida ? 
                <div className="baseNameCont" id="showEnida">
                    <p>Vance</p>
                    <p>{ enidSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isOklahomaCity ? 
                <div className="baseNameCont" id="showOklahomaCity">
                    <p>Tinker</p>
                    <p>{ oklahomaCitySafety[choice] }</p>
                </div> 
            : <div></div> }
            { isAltus ? 
                <div className="baseNameCont" id="showAltus">
                    <p>Altus</p>
                    <p>{ altusSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isWichitaFalls ? 
                <div className="baseNameCont" id="showWichitaFalls">
                    <p>Sheppard</p>
                    <p>{ wichitaFallSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isSanAngelo ? 
                <div className="baseNameCont" id="showSanAngelo">
                    <p>Goodfellow</p>
                    <p>{ sanAngeloSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isAbilene ? 
                <div className="baseNameCont" id="showAbilene">
                    <p>Dyess</p>
                    <p>{ abileneSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isDelRio ? 
                <div className="baseNameCont" id="showDelRio">
                    <p>Laughlin</p>
                    <p>{ delRioSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isSanAntonio ? 
                <div className="baseNameCont" id="showSanAntonio">
                    <p>Joint Base San Antonio-Lackland/Joint Base San Antonio-Randolph</p>
                    <p>{ sanAntonioSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isRapidCity ? 
                <div className="baseNameCont" id="showRapidCity">
                    <p>Ellsworth</p>
                    <p>{ rapidCitySafety[choice] }</p>
                </div> 
            : <div></div> }
            { isCheyenne ? 
                <div className="baseNameCont" id="showCheyenne">
                    <p>F.E. Warren</p>
                    <p>{ cheyenneSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isAurora ? 
                <div className="baseNameCont" id="showAurora">
                    <p>Buckley</p>
                    <p>{ auroraSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isColoradoSprings ? 
                <div className="baseNameCont" id="showColoradoSprings">
                    <p>Peterson</p>
                    <p>{ coloradoSpringsSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isClovis ? 
                <div className="baseNameCont" id="showClovis">
                    <p>Cannon</p>
                    <p>{ clovisSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isAlbuqurque ? 
                <div className="baseNameCont" id="showAlbuqurque">
                    <p>Kirtland</p>
                    <p>{ albuqurqueSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isAlamogordo ? 
                <div className="baseNameCont" id="showAlamogordo">
                    <p>Holloman</p>
                    <p>{ alamogordoSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isGreatFalls ? 
                <div className="baseNameCont" id="showGreatFalls">
                    <p>Malmstrom</p>
                    <p>{ greatFallsSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isSpokane ? 
                <div className="baseNameCont" id="showSpokane">
                    <p>Fairchild</p>
                    <p>{ spokaneSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isTakoma ? 
                <div className="baseNameCont" id="showTakoma">
                    <p>Joint Base Lewis-McChord</p>
                    <p>{ tacomaSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isMountainHome ? 
                <div className="baseNameCont" id="showMountainHome">
                    <p>Mountain Home</p>
                    <p>{ mountainHomeSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isOgden ? 
                <div className="baseNameCont" id="showOgden">
                    <p>Hill</p>
                    <p>{ ogdenSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isMarysville ? 
                <div className="baseNameCont" id="showMarysville">
                    <p>Beale</p>
                    <p>{ marysvilleSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isTravis ? 
                <div className="baseNameCont" id="showTravis">
                    <p>Travis</p>
                    <p>{ fairfieldSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isLasVegas ? 
                <div className="baseNameCont" id="showLasVegas">
                    <p>Nellis</p>
                    <p>{ lasVegasSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isIndianSprings ? 
                <div className="baseNameCont" id="showIndianSprings">
                    <p>Creech,</p>
                    <p>{ indianSpringsSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isRosamond ? 
                <div className="baseNameCont" id="showRosamond">
                    <p>Edwards</p>
                    <p>{ rosamondSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isLompoc ? 
                <div className="baseNameCont" id="showLompoc">
                    <p>Vandenberg</p>
                    <p>{ lompocSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isElSegundo ? 
                <div className="baseNameCont" id="showElSegundo">
                    <p>Los Angeles</p>
                    <p>{ elSegundoSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isAnchorage ? 
                <div className="baseNameCont" id="showAnchorage">
                    <p>Joint Base Elmendorf-Richardson</p>
                    <p>{ anchorageSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isFairbanks ? 
                <div className="baseNameCont" id="showFairbanks">
                    <p>Eielson</p>
                    <p>{ fairbanksSafety[choice] }</p>
                </div> 
            : <div></div> }
            { isHonolulu ? 
                <div className="baseNameCont" id="showHonolulu">
                    <p>Joint Base Pearl Harbor-Hickam</p>
                    <p>{ honoluluSafety[choice] }</p>
                </div> 
            : <div></div> }
        </div>
    )
}
export default Safety;
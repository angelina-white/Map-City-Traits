import { useState } from 'react';
import USAMap from "react-usa-map";
import Form from 'react-bootstrap/Form';

function BAH()
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

    const [isDependents, setIsDependents] = useState(false)
    const [rank, setRank] = useState(0)

    const dcBAH = [1905, 1905, 1905, 1905, 2175, 2319, 2358, 2499, 2661]
    const dcBAHDep = [2355, 2355, 2355, 2355, 2388, 2928, 2955, 2982, 3120]

    const bostonBAH = [2193, 2193, 2193, 2193, 2541, 2739, 2907, 3180, 3321]
    const bostonBAHDep = [2901, 2901, 2901, 2901, 3081, 3558, 3606, 3660, 3894, 3576]

    const trentonBAH = [1830, 1830, 1830, 1830, 2043, 2265, 2451, 2790, 2874]
    const trentonBAHDep = [2439, 2439, 2439, 2439, 2724, 3024, 3042, 3051, 3159]

    const doverBAH = [1350, 1350, 1350, 1350, 1503, 1590, 1635, 1698, 1707]
    const doverBAHDep = [1635, 1635, 1635, 1635, 1680, 1743, 1803, 1878, 1965]

    const hamptonBAH = [1290, 1290, 1290, 1290, 1524, 1650, 1692, 1749, 1761]
    const hamptonBAHDep = [1689, 1689, 1689, 1689, 1728, 1806, 1821, 1830, 1941]

    const goldsboroBAH = [1059, 1059, 1059, 1059, 1062, 1068, 1095, 1158, 1275]
    const goldsboroBAHDep = [1089, 1089, 1089, 1089, 1116, 1290, 1410, 1545, 1698]

    const charlestonBAH = [1455, 1455, 1455, 1455, 1647, 1755, 1788, 1884, 1986]
    const charlestonBAHDep = [1782, 1782, 1782, 1782, 1806, 2169, 2187, 2196, 2247]

    const sumterBAH = [972, 972, 972, 972, 999, 1023, 1068, 1158, 1206]
    const sumterBAHDep = [1068, 1068, 1068, 1068, 1113, 1305, 1368, 1446, 1590]

    const tullahomaBAH = [1140, 1140, 1140, 1140, 1317, 1434, 1518, 1650, 1698]
    const tullahomaBAHDep = [1518, 1518, 1518, 1518, 1608, 1800, 1833, 1875, 2013]

    const columbusBAH = [804, 804, 804, 804, 858, 930, 993, 1083, 1143]
    const columbusBAHDep = [966, 966, 966, 966, 1035, 1245, 1323, 1410, 1524]

    const montgomeryBAH = [1005, 1005, 1005, 1005, 1110, 1173, 1218, 1281, 1287]
    const montgomeryBAHDep = [1218, 1218, 1218, 1218, 1266, 1311, 1329, 1362, 1455]

    const valdostaBAH = [996, 996, 996, 996, 1080, 1134, 1158, 1179, 1194]
    const valdostaBAHDep = [1143, 1143, 1143, 1143, 1155, 1245, 1317, 1404, 1533]

    const maconBAH = [1089, 1089, 1089, 1089, 1203, 1272, 1338, 1419, 1425]
    const maconBAHDep = [1341, 1341, 1341, 1341, 1410, 1428, 1491, 1572, 1716]

    const biloxiBAH = [1005, 1005, 1005, 1005, 1068, 1113, 1203, 1314, 1320]
    const biloxiBAHDep = [1203, 1203, 1203, 1203, 1296, 1356, 1413, 1485, 1593]

    const valparaisoBAH = [1599, 1599, 1599, 1599, 1833, 1959, 1980, 1995, 2019]
    const valparaisoBAHDep = [1965, 1965, 1965, 1965, 1968, 2085, 2229, 2397, 2562]

    const panamaCityBAH = [1386, 1386, 1386, 1386, 1518, 1596, 1644, 1758, 1836]
    const panamaCityBAHDep = [1647, 1647, 1647, 1647, 1695, 1980, 2031, 2091, 2199]

    const tampaBAH = [1647, 1647, 1647, 1647, 1851, 1968, 2061, 2229, 2319]
    const tampaBAHDep = [2061, 2061, 2061, 2061, 2160, 2484, 2502, 2511, 2544]

    const cocoaBeachBAH = [1509, 1509, 1509, 1509, 1638, 1719, 1812, 1959, 2013]
    const cocoaBeachBAHDep = [1812, 1812, 1812, 1812, 1911, 2121, 2139, 2148, 2172]

    const daytonBAH = [981, 981, 981, 981, 1077, 1134, 1179, 1272, 1332]
    const daytonBAHDep = [1176, 1176, 1176, 1176, 1221, 1449, 1488, 1536, 1641]

    const bellevilleBAH = [1092, 1092, 1092, 1092, 1167, 1218, 1236, 1284, 1389]
    const bellevilleBAHDep = [1215, 1215, 1215, 1215, 1218, 1452, 1575, 1713, 1851]

    const knobNosterBAH = [759, 759, 759, 759, 837, 951, 1032, 1122, 1212]
    const knobNosterBAHDep = [981, 981, 981, 981, 1077, 1272, 1377, 1494, 1617]

    const littleRockBAH = [1146, 1146, 1146, 1146, 1320, 1443, 1527, 1626, 1632]
    const littleRockBAHDep = [1527, 1527, 1527, 1527, 1617, 1635, 1650, 1659, 1725]

    const minotBAH = [927, 927, 927, 927, 1026, 1269, 1287, 1371, 1488]
    const minotBAHDep = [1185, 1185, 1185, 1185, 1284, 1692, 1713, 1722, 1737]

    const grandForksBAH = [981, 981, 981, 981, 1089, 1206, 1293, 1470, 1518]
    const grandForksBAHDep = [1290, 1290, 1290, 1290, 1428, 1614, 1629, 1638, 1683]

    const offuttBAH = [987, 987, 987, 987, 1113, 1287, 1317, 1488, 1569]
    const offuttBAHDep = [1317, 1317, 1317, 1317, 1422, 1719, 1743, 1773, 1866]

    const wichitaBAH = [768, 768, 768, 768, 849, 1059, 1077, 1191, 1269]
    const wichitaBAHDep = [1023, 1023, 1023, 1023, 1128, 1413, 1431, 1440, 1497]

    const enidBAH = [699, 699, 699, 699, 810, 942, 1014, 1122, 1188]
    const enidBAHDep = [930, 930, 930, 930, 1080, 1260, 1350, 1452, 1584]

    const oklahomaCityBAH = [1017, 1017, 1017, 1017, 1101, 1161, 1281, 1425, 1437]
    const oklahomaCityBAHDep = [1278, 1278, 1278, 1278, 1404, 1482, 1557, 1647, 1740]

    const altusBAH = [768, 768, 768, 768, 843, 960, 1044, 1137, 1230]
    const altusBAHDep = [984, 984, 984, 984, 1074, 1284, 1392, 1515, 1641]

    const wichitaFallsBAH = [798, 798, 798, 798, 897, 1077, 1188, 1308, 1446]
    const wichitaFallsBAHDep = [1065, 1065, 1065, 1065, 1155, 1440, 1584, 1743, 1929]

    const sanAngeloBAH = [861, 861, 861, 861, 963, 1125, 1194, 1335, 1392]
    const sanAngeloBAHDep = [1146, 1146, 1146, 1146, 1284, 1506, 1590, 1686, 1764]

    const abileneBAH = [864, 864, 864, 864, 960, 1149, 1182, 1302, 1386]
    const abileneBAHDep = [1128, 1128, 1128, 1128, 1236, 1536, 1575, 1623, 1689]

    const delRioBAH = [855, 855, 855, 855, 951, 1083, 1152, 1266, 1332]
    const delRioBAHDep = [1140, 1140, 1140, 1140, 1212, 1446, 1536, 1635, 1776]

    const sanAntonioBAH = [1248, 1248, 1248, 1248, 1410, 1542, 1665, 1806, 1812]
    const sanAntonioBAHDep = [1662, 1662, 1662, 1662, 1791, 1836, 1869, 1911, 1980]

    const rapidCityBAH = [987, 987, 987, 987, 1095, 1257, 1317, 1512, 1566]
    const rapidCityBAHDep = [1314, 1314, 1314, 1314, 1461, 1680, 1701, 1731, 1821]

    const cheyenneBAH = [774, 774, 774, 774, 879, 1293, 1329, 1371, 1434]
    const cheyenneBAHDep = [1029, 1029, 1029, 1029, 1116, 1725, 1773, 1827, 1911]

    const auroraBAH = [1596, 1596, 1596, 1596, 1779, 1908, 2136, 2400, 2418]
    const auroraBAHDep = [2127, 2127, 2127, 2127, 2373, 2475, 2508, 2553, 2625]

    const coloradoSpringsBAH = [1605, 1605, 1605, 1605, 1806, 1917, 1983, 2067, 2073]
    const coloradoSpringsBAHDep = [1986, 1986, 1986, 1986, 2052, 2091, 2169, 2262, 2367]

    const clovisBAH = [744, 744, 744, 744, 843, 978, 1035, 1122, 1185]
    const clovisBAHDep = [993, 993, 993, 993, 1068, 1305, 1380, 1464, 1548]

    const albuqurqueBAH = [1275, 1275, 1275, 1275, 1401, 1488, 1635, 1797, 1803]
    const albuqurqueBAHDep = [1632, 1632, 1632, 1632, 1788, 1806, 1821, 1830, 1854]

    const alamogordoBAH = [906, 906, 906, 906, 999, 1164, 1206, 1371, 1434]
    const alamogordoBAHDep = [1206, 1206, 1206, 1206, 1317, 1554, 1572, 1581, 1611]

    const greatFallsBAH = [873, 873, 873, 873, 915, 993, 1053, 1128, 1200]
    const greatFallsBAHDep = [1011, 1011, 1011, 1011, 1071, 1326, 1404, 1494, 1599, 1341]

    const spokaneBAH = [1158, 1158, 1158, 1158, 1305, 1491, 1575, 1797, 1866]
    const spokaneBAHDep = [1545, 1545, 1545, 1545, 1740, 1992, 2100, 2220, 2340]

    const tacomaBAH = [1578, 1578, 1578, 1578, 1764, 1914, 2040, 2280, 2379]
    const tacomaBAHDep = [2034, 2034, 2034, 2034, 2205, 2553, 2586, 2622, 2682]

    const mountainHomeBAH = [1293, 1293, 1293, 1293, 1365, 1644, 1662, 1896, 2007]
    const mountainHomeBAHDep = [1602, 1602, 1602, 1602, 1818, 2193, 2214, 2223, 2289]

    const ogdenBAH = [1269, 1269, 1269, 1269, 1422, 1515, 1602, 1719, 1731]
    const ogdenBAHDep = [1602, 1602, 1602, 1602, 1695, 1782, 1818, 1866, 1950]

    const marysvilleBAH = [1983, 1983, 1983, 1983, 2181, 2301, 2424, 2607, 2673, 2385]
    const marysvilleBAHDep = [2421, 2421, 2421, 2421, 2553, 2796, 2814, 2823, 2880]

    const fairfieldBAH = [2112, 2112, 2112, 2112, 2454, 2640, 2724, 2841, 2865]
    const fairfieldBAHDep = [2724, 2724, 2724, 2724, 2811, 2928, 2943, 2952, 3000]

    const lasVegasBAH = [1425, 1425, 1425, 1425, 1626, 1737, 1791, 1887, 1929]
    const lasVegasBAHDep = [1794, 1794, 1794, 1794, 1848, 2016, 2046, 2088, 2166]

    const indianSpringsBAH = [1425, 1425, 1425, 1425, 1626, 1737, 1791, 1887, 1929]
    const indianSpringsBAHDep = [1794, 1794, 1794, 1794, 1848, 2016, 2046, 2088, 2166]

    const rosamondBAH = [1548, 1548, 1548, 1548, 1722, 1836, 1986, 2187, 2229]
    const rosamondBAHDep = [1983, 1983, 1983, 1983, 2145, 2322, 2418, 2529, 2649]

    const lompocBAH = [1752, 1752, 1752, 1752, 1968, 2088, 2109, 2175, 2277]
    const lompocBAHDep = [2091, 2091, 2091, 2091, 2097, 2460, 2499, 2547, 2649]

    const elSegundoBAH = [2349, 2349, 2349, 2349, 2691, 2886, 3027, 3261, 3384]
    const elSegundoBAHDep = [3021, 3021, 3021, 3021, 3171, 3594, 3639, 3690, 3807]

    const anchorageBAH = [1383, 1383, 1383, 1383, 1683, 1692, 1788, 1920, 2034]
    const anchorageBAHDep = [1845, 1845, 1845, 1845, 2244, 2259, 2382, 2547, 2712]

    const eielsonBAH = [1383, 1383, 1383, 1383, 1683, 1692, 1788, 1920, 2034]
    const eielsonBAHDep = [1602, 1602, 1602, 1602, 1986, 2001, 2100, 2235, 2397]

    const honoluluBAH = [2004, 2004, 2004, 2004, 2220, 2412, 2682, 2991, 3015]
    const honoluluBAHDep = [2670, 2670, 2670, 2670, 2961, 3081, 3258, 3456, 3633]



    const [dcColor, setDcColor] = useState('circle')

    function findDcColor(num)
    {
        if (isDependents == true)
        {
            if (dcBAHDep[rank] > 0 && dcBAHDep[rank] <= 1000)
            {   
                setDcColor("circle white")
            }
            else if (dcBAHDep[rank] > 1000 && dcBAHDep[rank] <= 1500)
            {
                setDcColor("circle lightGreen")
            }
            else if (dcBAHDep[rank] > 1500 && dcBAHDep[rank] <= 2000)
            {
                setDcColor("circle green")
            }
            else if (dcBAHDep[rank] > 2000)
            {
                setDcColor("circle darkGreen")
            }
        }
        else
        {
            if (dcBAH[num] > 0 && dcBAH[num] <= 1000)
            {
                setDcColor("circle white")
            }
            else if (dcBAH[num] > 1000 && dcBAH[num] <= 1500)
            {
                setDcColor("circle lightGreen")
            }
            else if (dcBAH[num] > 1500 && dcBAH[num] <= 2000)
            {
                setDcColor("circle green")
            }
            else if (dcBAH[num] > 2000)
            {
                setDcColor("circle darkGreen")
            }
        }
    }

    function clickDependents()
    {
        setIsDependents(true)
        findDcColor(rank)
    }

    function clickNoDependents()
    {
        setIsDependents(false)
        findDcColor(rank)
    }

    function click1()
    {
        setRank(0)
        findDcColor(0)
    }

    function click2()
    {
        setRank(1)
        findDcColor(1)
    }

    function click3()
    {
        setRank(2)
        findDcColor(2)
    }

    function click4()
    {
        setRank(3)
        findDcColor(3)
    }

    function click5()
    {
        setRank(4)
        findDcColor(4)
    }

    function click6()
    {
        setRank(5)
        findDcColor(5)
    }

    function click7()
    {
        setRank(6)
        findDcColor(6)
    }

    function click8()
    {
        setRank(7)
        findDcColor(7)
    }

    function click9()
    {
        setRank(8)
        findDcColor(8)
    }

    return (
        <div className="mapContainer">
            <div id="BAHButtons">
                <Form>
                {['radio'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                        inline
                        label="With dependents"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                        onClick={ clickDependents }
                    />
                    <Form.Check
                        inline
                        label="Without dependents"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                        onClick={ clickNoDependents }
                    />
                    </div>
                ))}
                </Form>

                <Form>
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                            inline
                            label="e1"
                            name="group2"
                            type={type}
                            id={`inline-${type}-1`}
                            onClick={ click1 }
                        />
                        <Form.Check
                            inline
                            label="e2"
                            name="group2"
                            type={type}
                            id={`inline-${type}-2`}
                            onClick={ click2 }
                        />
                        <Form.Check
                            inline
                            label="e3"
                            name="group2"
                            type={type}
                            id={`inline-${type}-1`}
                            onClick={ click3 }
                        />
                        <Form.Check
                            inline
                            label="e4"
                            name="group2"
                            type={type}
                            id={`inline-${type}-1`}
                            onClick={ click4 }
                        />
                        <Form.Check
                            inline
                            label="e5"
                            name="group2"
                            type={type}
                            id={`inline-${type}-2`}
                            onClick={ click5 }
                        />
                        <Form.Check
                            inline
                            label="e6"
                            name="group2"
                            type={type}
                            id={`inline-${type}-1`}
                            onClick={ click6 }
                        />
                        <Form.Check
                            inline
                            label="e7"
                            name="group2"
                            type={type}
                            id={`inline-${type}-2`}
                            onClick={ click7 }
                        />
                        <Form.Check
                            inline
                            label="e8"
                            name="group2"
                            type={type}
                            id={`inline-${type}-2`}
                            onClick={ click8 }
                        />
                        <Form.Check
                            inline
                            label="e9"
                            name="group2"
                            type={type}
                            id={`inline-${type}-2`}
                            onClick={ click9 }
                        />
                    </div>
                ))}
                </Form>
            </div>
            {/* <USAMap customize={statesCustomConfig()} onClick={mapHandler} /> */}
            <USAMap />
            <div className={ dcColor } id="dc" onMouseOver={ ()=> setIsDc(true) } onMouseLeave={ ()=> setIsDc(false) } />
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


            {isDependents ?
                <div>
                    { isDc ?
                        <div className="baseNameCont" id="showDc">
                            <p>Joint Base Andrews</p>
                            <p>${ dcBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isBoston ? 
                        <div className="baseNameCont" id="showBoston">
                            <p>Hanscom</p>
                            <p>${ bostonBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isTrenton ? 
                        <div className="baseNameCont" id="showTrenton">
                            <p>Joint Base Mcguire-Dix-Lakehurst</p>
                            <p>${ trentonBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isDover ? 
                        <div className="baseNameCont" id="showDover">
                            <p>Dover</p>
                            <p>${ doverBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isHampton ? 
                        <div className="baseNameCont" id="showHampton">
                            <p>Joint Base Langely-Eustis</p>
                            <p>${ hamptonBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isGoldsboro ? 
                        <div className="baseNameCont" id="showGoldsboro">
                            <p>Seymour-Johnson</p>
                            <p>${ goldsboroBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isCharleston ? 
                        <div className="baseNameCont" id="showCharleston">
                            <p>Joint Base Charleston</p>
                            <p>${ charlestonBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isSumter ? 
                        <div className="baseNameCont" id="showSumter">
                            <p>Shaw</p>
                            <p>${ sumterBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isTullahoma ? 
                        <div className="baseNameCont" id="showTullahoma">
                            <p>Arnold</p>
                            <p>${ tullahomaBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isColumbus ? 
                        <div className="baseNameCont" id="showColumbus">
                            <p>Columbus</p>
                            <p>${ columbusBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isMontgomery ? 
                        <div className="baseNameCont" id="showMontgomery">
                            <p>Maxwell</p>
                            <p>${ montgomeryBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isValdosta ? 
                        <div className="baseNameCont" id="showValdosta">
                            <p>Moody</p>
                            <p>${ valdostaBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isMacon ? 
                        <div className="baseNameCont" id="showMacon">
                            <p>Robins</p>
                            <p>${ maconBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isBiloxi ? 
                        <div className="baseNameCont" id="showBiloxi">
                            <p>Keesler</p>
                            <p>${ biloxiBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isValparaiso ? 
                        <div className="baseNameCont" id="showValparaiso">
                            <p>Eglin</p>
                            <p>${ valparaisoBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isPanamaCity ? 
                        <div className="baseNameCont" id="showPanamaCity">
                            <p>Tyndall</p>
                            <p>${ panamaCityBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isTampa ? 
                        <div className="baseNameCont" id="showTampa">
                            <p>Macdill</p>
                            <p>${ tampaBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isCocoaBeach ? 
                        <div className="baseNameCont" id="showCocoaBeach">
                            <p>Patrick</p>
                            <p>${ cocoaBeachBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isDayton ? 
                        <div className="baseNameCont" id="showDayton">
                            <p>Wright-Patterson</p>
                            <p>${ daytonBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isBelleville ? 
                        <div className="baseNameCont" id="showBelleville">
                            <p>Scott</p>
                            <p>${ bellevilleBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isKnobNoster ? 
                        <div className="baseNameCont" id="showKnobNoster">
                            <p>Whiteman</p>
                            <p>${ knobNosterBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isLittleRock ? 
                        <div className="baseNameCont" id="showLittleRock">
                            <p>Little Rock</p>
                            <p>${ littleRockBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isMinot ? 
                        <div className="baseNameCont" id="showMinot">
                            <p>Minot</p>
                            <p>${ minotBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isGrandForks ? 
                        <div className="baseNameCont" id="showGrandForks">
                            <p>Grand Forks</p>
                            <p>${ grandForksBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isOffutt ? 
                        <div className="baseNameCont" id="showOffutt">
                            <p>Offutt</p>
                            <p>${ offuttBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isWichita ? 
                        <div className="baseNameCont" id="showWichita">
                            <p>McConnell</p>
                            <p>${ wichitaBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isEnida ? 
                        <div className="baseNameCont" id="showEnida">
                            <p>Vance</p>
                            <p>${ enidBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isOklahomaCity ? 
                        <div className="baseNameCont" id="showOklahomaCity">
                            <p>Tinker</p>
                            <p>${ oklahomaCityBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isAltus ? 
                        <div className="baseNameCont" id="showAltus">
                            <p>Altus</p>
                            <p>${ altusBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isWichitaFalls ? 
                        <div className="baseNameCont" id="showWichitaFalls">
                            <p>Sheppard</p>
                            <p>${ wichitaFallsBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isSanAngelo ? 
                        <div className="baseNameCont" id="showSanAngelo">
                            <p>Goodfellow</p>
                            <p>${ sanAngeloBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isAbilene ? 
                        <div className="baseNameCont" id="showAbilene">
                            <p>Dyess</p>
                            <p>${ abileneBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isDelRio ? 
                        <div className="baseNameCont" id="showDelRio">
                            <p>Laughlin</p>
                            <p>${ delRioBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isSanAntonio ? 
                        <div className="baseNameCont" id="showSanAntonio">
                            <p>Joint Base San Antonio-Lackland/Joint Base San Antonio-Randolph</p>
                            <p>${ sanAntonioBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isRapidCity ? 
                        <div className="baseNameCont" id="showRapidCity">
                            <p>Ellsworth</p>
                            <p>${ rapidCityBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isCheyenne ? 
                        <div className="baseNameCont" id="showCheyenne">
                            <p>F.E. Warren,</p>
                            <p>${ cheyenneBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isAurora ? 
                        <div className="baseNameCont" id="showAurora">
                            <p>Buckley</p>
                            <p>${ auroraBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isColoradoSprings ? 
                        <div className="baseNameCont" id="showColoradoSprings">
                            <p>Peterson</p>
                            <p>${ coloradoSpringsBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isClovis ? 
                        <div className="baseNameCont" id="showClovis">
                            <p>Cannon</p>
                            <p>${ clovisBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isAlbuqurque ? 
                        <div className="baseNameCont" id="showAlbuqurque">
                            <p>Kirtland</p>
                            <p>${ albuqurqueBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isAlamogordo ? 
                        <div className="baseNameCont" id="showAlamogordo">
                            <p>Holloman</p>
                            <p>${ alamogordoBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isGreatFalls ? 
                        <div className="baseNameCont" id="showGreatFalls">
                            <p>Malmstrom</p>
                            <p>${ greatFallsBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isSpokane ? 
                        <div className="baseNameCont" id="showSpokane">
                            <p>Fairchild</p>
                            <p>${ spokaneBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isTakoma ? 
                        <div className="baseNameCont" id="showTakoma">
                            <p>Joint Base Lewis-McChord</p>
                            <p>${ tacomaBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isMountainHome ? 
                        <div className="baseNameCont" id="showMountainHome">
                            <p>Mountain Home</p>
                            <p>${ mountainHomeBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isOgden ? 
                        <div className="baseNameCont" id="showOgden">
                            <p>Hill</p>
                            <p>${ ogdenBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isMarysville ? 
                        <div className="baseNameCont" id="showMarysville">
                            <p>Beale</p>
                            <p>${ marysvilleBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isTravis ? 
                        <div className="baseNameCont" id="showTravis">
                            <p>Travis</p>
                            <p>${ fairfieldBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isLasVegas ? 
                        <div className="baseNameCont" id="showLasVegas">
                            <p>Nellis</p>
                            <p>${ lasVegasBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isIndianSprings ? 
                        <div className="baseNameCont" id="showIndianSprings">
                            <p>Creech</p>
                            <p>${ indianSpringsBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isRosamond ? 
                        <div className="baseNameCont" id="showRosamond">
                            <p>Edwards</p>
                            <p>${ rosamondBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isLompoc ? 
                        <div className="baseNameCont" id="showLompoc">
                            <p>Vandenberg</p>
                            <p>${ lompocBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isElSegundo ? 
                        <div className="baseNameCont" id="showElSegundo">
                            <p>Los Angeles</p>
                            <p>${ elSegundoBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isAnchorage ? 
                        <div className="baseNameCont" id="showAnchorage">
                            <p>Joint Base Elmendorf-Richardson</p>
                            <p>${ anchorageBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isFairbanks ? 
                        <div className="baseNameCont" id="showFairbanks">
                            <p>Eielson</p>
                            <p>${ eielsonBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isHonolulu ? 
                        <div className="baseNameCont" id="showHonolulu">
                            <p>Joint Base Pearl Harbor-Hickam</p>
                            <p>${ honoluluBAHDep[rank]}</p>
                        </div> 
                    : <div></div> }
                </div>
            :
                <div>
                    { isDc ?
                        <div className="baseNameCont" id="showDc">
                            <p>Joint Base Andrews</p>
                            <p>${ dcBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isBoston ? 
                        <div className="baseNameCont" id="showBoston">
                            <p>Hanscom</p>
                            <p>${ bostonBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isTrenton ? 
                        <div className="baseNameCont" id="showTrenton">
                            <p>Joint Base Mcguire-Dix-Lakehurst</p>
                            <p>${ trentonBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isDover ? 
                        <div className="baseNameCont" id="showDover">
                            <p>Dover</p>
                            <p>${ doverBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isHampton ? 
                        <div className="baseNameCont" id="showHampton">
                            <p>Joint Base Langely-Eustis</p>
                            <p>${ hamptonBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isGoldsboro ? 
                        <div className="baseNameCont" id="showGoldsboro">
                            <p>Seymour-Johnson</p>
                            <p>${ goldsboroBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isCharleston ? 
                        <div className="baseNameCont" id="showCharleston">
                            <p>Joint Base Charleston</p>
                            <p>${ charlestonBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isSumter ? 
                        <div className="baseNameCont" id="showSumter">
                            <p>Shaw</p>
                            <p>${ sumterBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isTullahoma ? 
                        <div className="baseNameCont" id="showTullahoma">
                            <p>Arnold</p>
                            <p>${ tullahomaBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isColumbus ? 
                        <div className="baseNameCont" id="showColumbus">
                            <p>Columbus</p>
                            <p>${ columbusBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isMontgomery ? 
                        <div className="baseNameCont" id="showMontgomery">
                            <p>Maxwell</p>
                            <p>${ montgomeryBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isValdosta ? 
                        <div className="baseNameCont" id="showValdosta">
                            <p>Moody</p>
                            <p>${ valdostaBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isMacon ? 
                        <div className="baseNameCont" id="showMacon">
                            <p>Robins</p>
                            <p>${ maconBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isBiloxi ? 
                        <div className="baseNameCont" id="showBiloxi">
                            <p>Keesler</p>
                            <p>${ biloxiBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isValparaiso ? 
                        <div className="baseNameCont" id="showValparaiso">
                            <p>Eglin</p>
                            <p>${ valparaisoBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isPanamaCity ? 
                        <div className="baseNameCont" id="showPanamaCity">
                            <p>Tyndall</p>
                            <p>${ panamaCityBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isTampa ? 
                        <div className="baseNameCont" id="showTampa">
                            <p>Macdill</p>
                            <p>${ tampaBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isCocoaBeach ? 
                        <div className="baseNameCont" id="showCocoaBeach">
                            <p>Patrick</p>
                            <p>${ cocoaBeachBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isDayton ? 
                        <div className="baseNameCont" id="showDayton">
                            <p>Wright-Patterson</p>
                            <p>${ daytonBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isBelleville ? 
                        <div className="baseNameCont" id="showBelleville">
                            <p>Scott</p>
                            <p>${ bellevilleBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isKnobNoster ? 
                        <div className="baseNameCont" id="showKnobNoster">
                            <p>Whiteman</p>
                            <p>${ knobNosterBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isLittleRock ? 
                        <div className="baseNameCont" id="showLittleRock">
                            <p>Little Rock</p>
                            <p>${ littleRockBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isMinot ? 
                        <div className="baseNameCont" id="showMinot">
                            <p>Minot</p>
                            <p>${ minotBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isGrandForks ? 
                        <div className="baseNameCont" id="showGrandForks">
                            <p>Grand Forks</p>
                            <p>${ grandForksBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isOffutt ? 
                        <div className="baseNameCont" id="showOffutt">
                            <p>Offutt</p>
                            <p>${ offuttBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isWichita ? 
                        <div className="baseNameCont" id="showWichita">
                            <p>McConnell</p>
                            <p>${ wichitaBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isEnida ? 
                        <div className="baseNameCont" id="showEnida">
                            <p>Vance</p>
                            <p>${ enidBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isOklahomaCity ? 
                        <div className="baseNameCont" id="showOklahomaCity">
                            <p>Tinker</p>
                            <p>${ oklahomaCityBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isAltus ? 
                        <div className="baseNameCont" id="showAltus">
                            <p>Altus</p>
                            <p>${ altusBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isWichitaFalls ? 
                        <div className="baseNameCont" id="showWichitaFalls">
                            <p>Sheppard</p>
                            <p>${ wichitaFallsBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isSanAngelo ? 
                        <div className="baseNameCont" id="showSanAngelo">
                            <p>Goodfellow</p>
                            <p>${ sanAngeloBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isAbilene ? 
                        <div className="baseNameCont" id="showAbilene">
                            <p>Dyess</p>
                            <p>${ abileneBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isDelRio ? 
                        <div className="baseNameCont" id="showDelRio">
                            <p>Laughlin</p>
                            <p>${ delRioBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isSanAntonio ? 
                        <div className="baseNameCont" id="showSanAntonio">
                            <p>Joint Base San Antonio-Lackland/Joint Base San Antonio-Randolph</p>
                            <p>${ sanAntonioBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isRapidCity ? 
                        <div className="baseNameCont" id="showRapidCity">
                            <p>Ellsworth</p>
                            <p>${ rapidCityBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isCheyenne ? 
                        <div className="baseNameCont" id="showCheyenne">
                            <p>F.E. Warren,</p>
                            <p>${ cheyenneBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isAurora ? 
                        <div className="baseNameCont" id="showAurora">
                            <p>Buckley</p>
                            <p>${ auroraBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isColoradoSprings ? 
                        <div className="baseNameCont" id="showColoradoSprings">
                            <p>Peterson</p>
                            <p>${ coloradoSpringsBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isClovis ? 
                        <div className="baseNameCont" id="showClovis">
                            <p>Cannon</p>
                            <p>${ clovisBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isAlbuqurque ? 
                        <div className="baseNameCont" id="showAlbuqurque">
                            <p>Kirtland</p>
                            <p>${ albuqurqueBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isAlamogordo ? 
                        <div className="baseNameCont" id="showAlamogordo">
                            <p>Holloman</p>
                            <p>${ alamogordoBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isGreatFalls ? 
                        <div className="baseNameCont" id="showGreatFalls">
                            <p>Malmstrom</p>
                            <p>${ greatFallsBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isSpokane ? 
                        <div className="baseNameCont" id="showSpokane">
                            <p>Fairchild</p>
                            <p>${ spokaneBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isTakoma ? 
                        <div className="baseNameCont" id="showTakoma">
                            <p>Joint Base Lewis-McChord</p>
                            <p>${ tacomaBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isMountainHome ? 
                        <div className="baseNameCont" id="showMountainHome">
                            <p>Mountain Home</p>
                            <p>${ mountainHomeBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isOgden ? 
                        <div className="baseNameCont" id="showOgden">
                            <p>Hill</p>
                            <p>${ ogdenBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isMarysville ? 
                        <div className="baseNameCont" id="showMarysville">
                            <p>Beale</p>
                            <p>${ marysvilleBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isTravis ? 
                        <div className="baseNameCont" id="showTravis">
                            <p>Travis</p>
                            <p>${ fairfieldBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isLasVegas ? 
                        <div className="baseNameCont" id="showLasVegas">
                            <p>Nellis</p>
                            <p>${ lasVegasBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isIndianSprings ? 
                        <div className="baseNameCont" id="showIndianSprings">
                            <p>Creech</p>
                            <p>${ indianSpringsBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isRosamond ? 
                        <div className="baseNameCont" id="showRosamond">
                            <p>Edwards</p>
                            <p>${ rosamondBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isLompoc ? 
                        <div className="baseNameCont" id="showLompoc">
                            <p>Vandenberg</p>
                            <p>${ lompocBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isElSegundo ? 
                        <div className="baseNameCont" id="showElSegundo">
                            <p>Los Angeles</p>
                            <p>${ elSegundoBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isAnchorage ? 
                        <div className="baseNameCont" id="showAnchorage">
                            <p>Joint Base Elmendorf-Richardson</p>
                            <p>${ anchorageBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isFairbanks ? 
                        <div className="baseNameCont" id="showFairbanks">
                            <p>Eielson</p>
                            <p>${ eielsonBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                    { isHonolulu ? 
                        <div className="baseNameCont" id="showHonolulu">
                            <p>Joint Base Pearl Harbor-Hickam</p>
                            <p>${ honoluluBAH[rank]}</p>
                        </div> 
                    : <div></div> }
                </div>
            }
        </div>
    )
}

export default BAH
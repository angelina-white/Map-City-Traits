import './App.css';
import USAMap from "react-usa-map";
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const city = "washington dc"
  const [total, setTotal] = useState(0)
  const foodTypes = 
  [
    // "australian", "belgian", "british", "cajun", "caribbean", "chinese", "cuban", "egyptian", "ethiopian", "filipino", "french", "german", "greek", "haitian", "hawaiian", "hungarian", "indian", "indonesian", "irish", "italian", "korean", "lebanese", "malaysian", "mexican", "moroccan", "pakistani", "peruvian", "polish", "portuguese", "russian", "scottish", "singaporean", "spanish", "taiwanese", "thai", "turkish", "ukrainian", "vietnamese"
    "filipino", "french", "hawaiian", "indian", "italian", "korean", "japanese", "mexican", "polish", "thai"
  ]
  const [score, setScore] = useState(0)

  useEffect(() =>
  {
    for (let i=0; i < foodTypes.length; i++)
    {
      axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${city}`, 
      {
        headers: 
        {
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
      },
        params: 
        {
          categories: foodTypes[i],
          limit: 50,
          radius: 40000
        }
      })
      .then((res) => 
      {
        setTotal((total) => total + (res.data.businesses.length))
      })
      .catch((err) => console.log (`error ${foodTypes[i]}`))
    }
  }, [])
    
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
  
  function showData()
  {    
    if (total <= 105)
    {
      setScore(1)
    }
    else if(total > 105 && total <= 210)
    {
      setScore(2)
    }
    else if(total > 210 && total <= 315)
    {
      setScore(3)
    }
    else if(total > 315 && total <= 420)
    {
      setScore(4)
    }
    else{
      setScore(5)
    }
  }
  
  console.log(`score: ${score}`)

  return (
    <div className="App">
      {/* <USAMap customize={statesCustomConfig()} onClick={mapHandler} /> */}
      <USAMap onClick={ mapHandler } />
      <div className="circle" onClick={ showData }/>
    </div>
  );
}

export default App;

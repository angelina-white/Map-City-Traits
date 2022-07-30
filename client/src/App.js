import './App.css';
import USAMap from "react-usa-map";
import { useEffect } from 'react';
import axios from 'axios';

function App() {

  const city = "Washington DC"

  useEffect(() =>
  {
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${city}`, 
    {
      headers: 
      {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
    },
      params: 
      {
      categories: 'ethiopian',
      }
    })
    .then((res) => console.log(res.data.businesses))
      .catch((err) => console.log ('error'))
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

  return (
    <div className="App">
      {/* <USAMap customize={statesCustomConfig()} onClick={mapHandler} /> */}
      <USAMap onClick={mapHandler} />
      <div className="circle" />
    </div>
  );
}

export default App;

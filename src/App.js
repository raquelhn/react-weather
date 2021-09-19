import './App.css';
import React, { useEffect, useState } from "react";
import ContentCard from './components/contentCard';
import RefreshButton from './components/refreshButton';
import {Header, Grid} from 'semantic-ui-react'




function App() {
  //for the location of the user
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  const REACT_APP_API_URL = 'https://api.sunrise-sunset.org/json';


  useEffect(() => {

    const fetchData = async () => {
      //its getting the location of the user
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });  
    
    
    //its fetching the weather data once the location is found
    await fetch(`${REACT_APP_API_URL}?lat=${lat}&lon=${long}&date=today`)
    .then(res => res.json())
    .then(res => {
      setData(res)
      console.log(res)
     
    });
  }
    fetchData();
  }, [lat, long]);



 
  return (
    <div className='App'>
     
      <Header  as='h1' textAlign='center'>Welcome</Header>
      <RefreshButton />
      {(typeof data.results != 'undefined') ? (
        <ContentCard weatherData={data}/>
      ): (
        <div></div>
      )}
  
      
  </div>
  );
  
}

export default App;

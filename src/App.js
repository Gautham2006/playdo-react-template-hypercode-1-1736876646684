import React, { useState, useEffect } from 'react';  
import './App.css';  

function App() {  
  const [location, setLocation] = useState(null);  
  const [emissions, setEmissions] = useState(0);  

  useEffect(() => {  
    navigator.geolocation.watchPosition(pos => {  
      const { latitude, longitude } = pos.coords;  
      setLocation({ latitude, longitude });  
    });  
  }, []);  

  const calculateEmissions = (distance) => {  
    const emissionsRate = 0.21; // kg CO2 per km (example)  
    return distance * emissionsRate;  
  };  

  return (  
    <div className="App">  
      <h1>Emissions Tracker</h1>  
      <div id="map" style={{ height: '500px', width: '100%' }}>  
        {location ? (  
          <p>Current Location: {location.latitude}, {location.longitude}</p>  
        ) : (  
          <p>Loading location...</p>  
        )}  
      </div>  
      <p>Estimated Emissions: {emissions.toFixed(2)} kg CO2</p>  
    </div>  
  );  
}  

export default App;
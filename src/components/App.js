import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  //set default state of plants listed on page with blank array
  const [ plants, setPlants ] = useState([])

  useEffect (() => {
    fetch('http://localhost:6001/plants')
    .then((res) => res.json())
    .then((plants) => setPlants(plants))
  }, [])

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} setPlants={setPlants} />
    </div>
  );
}

export default App;

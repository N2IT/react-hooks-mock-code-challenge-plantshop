import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  //set default state of plants listed on page with blank array
  const [ plants, setPlants ] = useState([])
  const [ search, setSearch ] = useState("")

  useEffect (() => {
    fetch('http://localhost:6001/plants')
    .then((res) => res.json())
    .then((plants) => setPlants(plants))
  }, [])

  const plantSearch = (plants.filter((plant) => {
    if(search === ""){
      return plant
    } else {
      return plant.name.toLowerCase().includes(search.toLowerCase())
    }
  }))

  function onSearch(value){
    setSearch(value)
  }

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plantSearch} setPlants={setPlants} onSearch={onSearch} />
    </div>
  );
}

export default App;

import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, setPlants, search, setSearch, onSearch }) {

  function onAddPlant(newPlant) {
    setPlants([...plants, newPlant])
  }

  return (
    <main>
      <NewPlantForm plants={plants} onAddPlant={onAddPlant} />
      <Search onSearch={onSearch} search={search} setSearch={setSearch} />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;

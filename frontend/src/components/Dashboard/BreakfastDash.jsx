import "./BreakfastDash.css";
import React, { useState } from 'react';
import axios from 'axios';
const Breakfast = () => {

  const [search, setSearch] = useState("");
  const [servings, setServings] = useState(1);
  const [servingUnit, setServingUnit] = useState("")
  const [searchResults, setSearchResults] = useState([]);
  const [selectedFood, setSelectedFood] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.get(`http://localhost:3001/search-nutrition?query=${search}`);
        setSearchResults(response.data);
      } catch (error) {
        console.error('Error fetching food data:', error);
      }
    };

  const handleFoodSelect = (foodItem) => {
    if (foodItem && foodItem.serving_qty) {
    setSelectedFood(foodItem.food_name); // Set the selected food name
    setServingUnit(Array.isArray(foodItem.serving_unit) ? foodItem.serving_unit : [foodItem.serving_unit]);
    setServings(servings.serving_qty);
  } else {
    alert("Please select a valid food item.");
  }
};
  const handleAddFood = async () => { 
    
    if (!selectedFood || selectedFood === "" || servingUnit === 'select' || servingUnit === "") {
      alert('Please select a valid food and serving unit.');
      return; 
    }
    try {
      const response = await axios.post('http://localhost:3001/nutrition', {
        foodItem: selectedFood,
        servings: servings,
        servingUnit: servingUnit,
        mealCategory: 'Breakfast',
      });

      const nutritionData = response.data;

      // Update the parent component's nutrition state (i.e., the calorie log) with the new food
      setNutritionData((prevState) => ({
        ...prevState,
        Breakfast: [...prevState.Breakfast, nutritionData] // Add the new food to the Breakfast section
      }));

      setSearchResults([]); 
      setSelectedFood('');
      setServings(1);
      setServingUnit([]);
    } catch (error) {
      console.error('Error fetching nutrition data:', error);
    }
  };
  return (
    <div className="breakfast-form">
      <form onSubmit={handleSearch}>
        <input 
          type="search" 
          placeholder="Search Foods..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)} 
        />
        <button type="submit">Search</button>
      
      <div className="serving">
        <label htmlFor="servings">Servings:</label>
        <input
          type="number"
          id="servings"
          min="1"
          value={servings.serving_qty}
          onChange={(e) => setServings(Number(e.target.value))}
          placeholder="Enter servings number"
          required
        />
      </div>
      
      <div className="serving-unit">
        <label htmlFor="serving-unit">Serving Unit:</label>
        <select
          id="serving-unit"
          value={servingUnit}
          onChange={(e) => handleFoodSelect(searchResults.find(servingunit => servingunit.serving_unit === e.target.value))}
        >
          <option value="select">Select a unit</option>
            {searchResults.map((servingUnitItem, index) => (
          <option key={`unit-${servingUnitItem.serving_unit}-${index}`} value={servingUnit.serving_unit}>
            {servingUnitItem.serving_unit}
              </option>
            ))}
            <option disabled>No serving units available</option>
        </select>
      </div>

        <div className="food-selection">
        <label htmlFor="food-selection">Select a Food</label>
        <select
        id="food-selection-dropdown"
        aria-label="Select a food item"
        value={selectedFood}
        onChange={(e) => handleFoodSelect(searchResults.find(food => food.food_name === e.target.value))}
        >
        <option value="select">Select a food</option>
        {searchResults.map((foodItem, index) => (
          <option key={`food-${foodItem.food_name}-${index}`} value={foodItem.food_name}>
            {foodItem.food_name}
          </option>
        ))}
      </select>
    </div>


      <button onClick={handleAddFood}>Add to Daily Log</button>
      </form>
    </div>
  );
};

export default Breakfast;
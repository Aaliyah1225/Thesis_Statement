import "./SnackDash.css"
import React, { useState } from 'react';
import axios from 'axios';

const Snack = () => {


  const [search, setSearch] = useState("");
  const [servings, setServings] = useState(1);
  const [servingUnit, setServingUnit] = useState("")
  const [searchResults, setSearchResults] = useState([]);
  const [selectedFood, setSelectedFood] = useState("");

  const [nutritionData, setNutritionData] = useState({
    Breakfast: [],
    Lunch: [],
    Dinner: [],
    Snack: [],
  });

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
    if (foodItem) {
    setSelectedFood(foodItem.food_name); // Set the selected food name
    setServingUnit((foodItem.serving_unit));
    setServings(foodItem.serving_qty);
  } else {
    alert("Please select a valid food item.");
  }
};
  const handleAddFood = async () => { 
    
    if (!selectedFood || !servingUnit || servingUnit === "select") {
      alert('Please select a valid food and serving unit.');
      return; 
    }
    try {
      const foodData = {
        foodItem: selectedFood,
        servings,
        servingUnit,
        mealCategory: 'Breakfast',
      };
      const response = await axios.post('http://localhost:3001/nutrition', foodData, {
        headers: {
          'Content-Type': 'application/json',  // Ensure this is set correctly
        }
      });
      
      console.log('Response from server:', response.data);

      const newFood = response.data;
    
      setNutritionData((prevState) => ({
        ...prevState,
        Breakfast: [...prevState.Breakfast, newFood]
      }));

      setSearchResults([]); 
      setSelectedFood('');
      setServings(1);
      setServingUnit('');

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
          value={servings}
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
          onChange={(e) => setServingUnit(e.target.value)}
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

export default Snack;
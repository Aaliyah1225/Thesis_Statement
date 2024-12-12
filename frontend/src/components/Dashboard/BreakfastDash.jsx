import "./BreakfastDash.css";
import React, { useState } from 'react';
import axios from 'axios';
const Breakfast = () => {

  const [search, setSearch] = useState("");
  const [servings, setServings] = useState(1);
  const [servingSize, setServingSize] = useState('select')
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

  const handleFoodSelect = async (foodItem) => {
    setSelectedFood(foodItem.food_name); // Set the selected food name
  };
  const handleAddFood = async () => {
    if (!selectedFood || servings <= 0 || servingSize === 'select') {
      alert('Please select a valid food, servings, and serving size.');
      return; 
    }
    try {
      const response = await axios.post('http://localhost:3001/nutrition', {
        foodItem: selectedFood,
        servings: servings,
        servingSize: servingSize,
        mealCategory: 'Breakfast',
      });

      const nutritionData = response.data;

      // Update the parent component's nutrition state (i.e., the calorie log) with the new food
      setNutritionData((prevState) => ({
        ...prevState,
        Breakfast: [...prevState.Breakfast, nutritionData] // Add the new food to the Breakfast section
      }));

      setSearchResults([]); // Clear the search results after selection

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
      </form>
      
      <div className="serving">
        <label htmlFor="servings">Servings:</label>
        <input
          type="number"
          id="servings"
          min="1"
          value={servings}
          onChange={(e) => setServings(Number(e.target.value))} // Update servings
          placeholder="Enter servings number"
          required
        />
      </div>
      
      <div className="serving-size box">
        <label htmlFor="serving-size">Serving Size:</label>
        <select
          id="serving-size"
          value={servingSize}
          onChange={(e) => setServingSize(e.target.value)} // Update serving size
        >
          <option value="select">Select...</option>
          <option value="grams">Grams</option>
          <option value="cups">Cups</option>
          <option value="ounces">Ounces</option>
          <option value="slices">Slices</option>
        </select>
      </div>
      {searchResults.length > 0 && (
        <div className="food-selection">
          <label htmlFor="food-selection">Select a Food</label>
          <input 
            type="text" 
            id="food-selection"
            value={selectedFood}
            onChange={(e) => setSelectedFood(e.target.value)} // Allow editing in the textbox
            placeholder="Start typing to search..." 
          />
          <ul className="food-dropdown">
            {searchResults.map((foodItem, index) => (
              <li key={index}>
                <button onClick={() => handleFoodSelect(foodItem)}>
                  {foodItem.food_name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <button onClick={handleAddFood}>Add to Daily Log</button>
    </div>
  );
};

export default Breakfast;
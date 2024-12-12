import "./BreakfastDash.css";
import React, { useState } from 'react';
import axios from 'axios';
const Breakfast = () => {

  const [search, setSearch] = useState("");
  const [servings, setServings] = useState(1);
  const [servingSize, setServingSize] = useState('select')
  const [foodData, setFoodData] = useState(null);
  const [mealCategory, setMealCategory] = useState('Breakfast'); 
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.get(`http://localhost:3001/search-nutrition?query=${search}`);
        setSearchResults(response.data);
    } catch (error) {
      console.error('Error fetching food data:', error);
    }
  };

  const handleAddFood = async (foodItem) => {
    try {
      const response = await axios.post('http://localhost:3001/nutrition', {
        foodItem: foodData.food_name,
        servings: servings,
        servingSize: servingSize,
        mealCategory: mealCategory,
      });

      console.log(response.data);
      setFoodData(foodItem);
      setSearchResults([]);

    } catch (error) {
      console.error('Error fetching nutrition info:', error);
    }
  };
  return (
    <form onSubmit={handleSearch} className="breakfast-form">
      <div className="search-breakfast">
        <label htmlFor="search">Search For Breakfast</label>
        <input 
        type="search" 
        placeholder="Search Foods..." 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
        
        <div className="serving">
          <label htmlFor="servings">Servings:</label>
          <input
            type="number"
            id="servings"
            min="1"
            value={servings}
            onChange={(e) => setServings(e.target.value)}
            placeholder="Enter servings number"
            required
          />
        </div>
        <div className="serving-size box">
          <label htmlFor="serving-size" name="serving-size">
            Serving Size:
          </label>
          <select 
          id="serving sizes" 
          value={servingSize}
          onChange={(e) => setServingSize(e.target.value)}
          name="servings sizes">
          <option value="select">Select...</option>
          <option value="grams">Grams</option>
          <option value="cups">Cups</option>
          <option value="ounces">Ounces</option>
          <option value="slices">Slices</option>
          </select>
        </div>

        <div className="meal-category">
          <label htmlFor="meal-category">Select Meal Category:</label>
          <select
            id="meal-category"
            value={mealCategory}
            onChange={(e) => setMealCategory(e.target.value)}
          >
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snack">Snack</option>
          </select>
        </div>
        
        <button type="submit">Search</button>

        {searchResults.length > 0 && (
          <div className="search-results">
            <h3>Select a Food</h3>
            <ul>
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

        {foodData && (
          <div>
            <h3>Food: {foodData.food_name}</h3>
            <button onClick={handleAddFood}>Add to Daily Log</button>
            </div>
        )}
      </div>
    </form>
  );
};

export default Breakfast;
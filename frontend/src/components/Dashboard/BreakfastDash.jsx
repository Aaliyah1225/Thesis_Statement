import "./BreakfastDash.css";
import React, { useState } from 'react';

const Breakfast = () => {

  const [search, setSearch] = useState("");
  const [servings, setServings] = useState(1);
  const [servingSize, setServingSize] = useState('select')
  const [foodData, setFoodData] = useState(null);
  const [mealCategory, setMealCategory] = useState('Breakfast'); 

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.get(`http://localhost:3001/search?query=${search}`);
        const firstMatch = response.data;
        setFoodData(firstMatch);
    } catch (error) {
      console.error('Error fetching food data:', error);
    }
  };

  const handleAddFood = async (e) => {
    e.preventDefault();

    if (!foodData) return;

    try {
      const response = await axios.post('http://localhost:3001/nutrition', {
        foodItem: foodData.food_name,
        servings: servings,
        servingSize: servingSize,
        mealCategory: mealCategory,
      });

      console.log(response.data);

    } catch (error) {
      console.error('Error fetching nutrition info:', error);
    }
  };
  return (
    <form submit={handleSearch} className="breakfast-form">
      <div className="search-breakfast">
        <label for="search">Search For Breakfast</label>
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
        <div class="serving-size box">
          <label htmlFor="serving-size" name="serving-size">
            Serving Size:
          </label>
          <select 
          id="serving sizes" 
          value={servingSize}
          onChange={(e) = setServingSize(e.target.value)}
          name="servings sizes">
          <option value="select">Select...</option>
          <option value="grams"></option>
          <option value="cups"></option>
          <option value="ounces"></option>
          <option value="slices"></option>
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
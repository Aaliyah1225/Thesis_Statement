import { useState } from "react";
import "./BreakfastDash.css";

const Breakfast = () => {
  //State to hold input values
  const [query, setQuery] = useState("");
  const [servings, setServings] = useState(1);
  const [servingSize, setServingSize] = useState("grams");
  const [nutritionData, setNutritionData] = useState(null);
  // Handle input changes
  const handleQueryChanges = (e) => setQuery(e.target.value);
  const handleServingsChanges = (e) => setServings(e.target.value);
  const handleServingSizeChanges = (e) => setServingSize(e.target.value);

  const handleSearch = async () => {
    if (!query) {
      setError("Please enter a food item!");
      return;
    }
    try {
      const response = await axios.get("http://localhost:3001/get-nutrition", {
        params: { query }
      });
      setNutritionData(response.data);
      setError(null);
    } catch (err) {
      setNutritionData(null);
    }
  };

    return (
      <div>
        <div className="Search">
          <label>Search For Breakfast</label>
          <input type="search" 
          placeholder="Add Foods..." 
          value={query}
          onChange={handleQueryChanges}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="serving-box">
          <label htmlFor="servings">Servings:</label>
          <input
            type="number"
            value={servings}
            id="servings"
            min="1"
            onChange={handleServingsChanges}
            placeholder="Enter servings number"
          />
        </div>
        <div className="serving-size box">
          <label htmlFor="serving-size">Serving Size:</label>
          <select 
          id="serving sizes"
          value={servingSize}
          onChange={handleServingSizeChanges}
          >
          <option value="grams">Grams</option>
          <option value="cups">Cups</option>
          <option value="ounces">Ounces</option>
          <option value="slices">Slices</option>
          </select>
        </div>
        <button>Add</button>
      </div>
    );
}

export default Breakfast;
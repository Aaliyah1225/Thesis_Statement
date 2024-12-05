import "./BreakfastDash.css";

const Breakfast = () => {
  return (
    <div>
      <div className="Search">
        <label>Search For Breakfast</label>
        <input type="search" placeholder="Search Foods..." />
        <button>Search</button>
        <div class="serving">
          <label htmlFor="servings">Servings:</label>
          <input
            type="number"
            id="servings"
            min="1"
            placeholder="Enter servings number"
          />
        </div>
        <div class="serving-size box">
          <label htmlFor="serving-size" name="serving-size">
            Serving Size:
          </label>
          <select id="serving sizes" name="servings sizes">
          <option value="grams">Grams</option>
          <option value="cups">Cups</option>
          <option value="ounces">Ounces</option>
          <option value="slices">Slices</option>
          </select>
        </div>
      </div>
      <button>Add</button>
    </div>
  );
};

export default Breakfast;
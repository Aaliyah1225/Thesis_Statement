import "./DinnerDash.css";

const Dinner = () => {
  return (
    <div>
      <div className="Add">
        <label>Search For Dinner</label>
        <input type="search" placeholder="Add Foods..." />
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

export default Dinner;

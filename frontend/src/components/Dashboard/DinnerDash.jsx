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
          <option value="grams"></option>
          <option value="cups"></option>
          <option value="ounces"></option>
          <option value="slices"></option>
          </select>
        </div>
      </div>
      <button>Add</button>
    </div>
  );
};

export default Dinner;

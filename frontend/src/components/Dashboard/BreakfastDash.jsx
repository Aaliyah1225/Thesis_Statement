import "./BreakfastDash.css"

const Breakfast = () => {
    return (
      <div>
        <div className="Search">
          <label>Search For Breakfast</label>
          <input type="search" placeholder="Add Foods..." />
        </div>
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
        <button>Add</button>
      </div>
    );
}

export default Breakfast;
import "./DinnerDash.css";

const Dinner = () => {
  return (
    <form action="http://localhost:5173/dashboard" method="get" class="dinner-form">
      <div className="search-dinner">
        <label for="search">Search For Dinner</label>
        <input type="search" placeholder="Search Foods..." />
        
        <div class="serving">
          <label htmlFor="servings">Servings:</label>
          <input
            type="number"
            id="servings"
            min="1"
            placeholder="Enter servings number"
            required
          />
        </div>
        <div class="serving-size box">
          <label htmlFor="serving-size" name="serving-size">
            Serving Size:
          </label>
          <select id="serving sizes" name="servings sizes">
          <option value="select">Select...</option>
          <option value="grams">Grams</option>
          <option value="cups">Cups</option>
          <option value="ounces">Ounces</option>
          <option value="slices">Slices</option>
          </select>
        </div>
      </div>
      <input type="submit" value="Add" />
    </form>
  );
};

export default Dinner;

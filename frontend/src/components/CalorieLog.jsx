import "./CalorieLog.css";

const Calorie = () => {
  return (
    <div>
      <h1>Weekly Calorie Tracker</h1>
      <table>
        <caption>Calorie Log Tracker</caption>
        <tr>
          <th scope="col">Category</th>
          <th scope="col">Food Item</th>
          <th scope="col">Calories</th>
        </tr>
        <tr>
          <th scope="row">Breakfast</th>
        </tr>
        <tr>
          <th scope="row">Lunch</th>
        </tr>
        <tr>
          <th scope="row">Dinner</th>
        </tr>
      </table>
    </div>
  );
};

export default Calorie;

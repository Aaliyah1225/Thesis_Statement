import "./DailyCalorie.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Calorie = () => {
  //  const [ foods, setFoods ] = useState('');
  //   const [ calories, setCalories ] = useState('');
  //   const [ searchResults, setSearchResults] = useState([]);
  //   const [ totalCalories, setTotalCalories] = useState(0);
  //   const navigate = useNavigate();

  //   useEffect(() => {
  //     food()
  //   },[])

  //   const food = async () => {
  //     const response = await fetch ('https://trackapi.nutritionix.com/v2/search/instant')
  //   }

  return (
    <div>
      <h1>Weekly Calorie Tracker</h1>
      <table>
        <caption>Calorie Log Tracker</caption>
        <tr>
          <th scope="row">Category</th>
          <th scope="col">Food Item</th>
          <th scope="col">Calories</th>
          <th scope="col">Fats</th>
          <th scope="col">Protein</th>
          <th scope="col">Carbohydrates</th>
        </tr>
        <tr>
          <th scope="row">Breakfast</th>
          <th scope="col">
            <button>+</button>
          </th>
          <th scope="col">
            <select name="calories" id="calories">
              <option value="options">Select</option>
            </select>
          </th>
          <th scope="col">
            <select name="fats" id="fats">
              <option value="options">Select</option>
            </select>
          </th>
          <th scope="col">
            <select name="proteins" id="proteins">
              <option value="options">Select</option>
            </select>
          </th>
          <th scope="col">
            <select name="carbohydrates" id="carbohydrates">
              <option value="options">Select</option>
            </select>
          </th>
        </tr>
        <tr>
          <th scope="row">Lunch</th>
          <th scope="col">
            <button>+</button>
          </th>
          <th scope="col">
            <select name="calories" id="calories">
              <option value="options">Select</option>
            </select>
          </th>
          <th scope="col">
            <select name="fats" id="fats">
              <option value="options">Select</option>
            </select>
          </th>
          <th scope="col">
            <select name="proteins" id="proteins">
              <option value="options">Select</option>
            </select>
          </th>
          <th scope="col">
            <select name="carbohydrates" id="carbohydrates">
              <option value="options">Select</option>
            </select>
          </th>
        </tr>
        <tr>
          <th scope="row">Dinner</th>
          <th scope="col">
            <button>+</button>
          </th>
          <th scope="col">
            <select name="calories" id="calories">
              <option value="options">Select</option>
            </select>
          </th>
          <th scope="col">
            <select name="fats" id="fats">
              <option value="options">Select</option>
            </select>
          </th>
          <th scope="col">
            <select name="proteins" id="proteins">
              <option value="options">Select</option>
            </select>
          </th>
          <th scope="col">
            <select name="carbohydrates" id="carbohydrates">
              <option value="options">Select</option>
            </select>
          </th>
        </tr>
      </table>
    </div>
  );
};

export default Calorie;

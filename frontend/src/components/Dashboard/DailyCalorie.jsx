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
      <button>←</button><input type="date"></input><button>→</button>
      <h1>Weekly Calorie Tracker</h1>
      <table>
        <caption>Calorie Log Tracker</caption>
        <tbody>
        <tr>
          <th scope="row">Category</th>
          <th scope="col">Food Item</th>
          <th scope="col">Calories</th>
          <th scope="col">Servings</th>
          <th scope="col">Fats</th>
          <th scope="col">Protein</th>
          <th scope="col">Carbohydrates</th>
          <th scope="col">Sodium</th>
          <th scope="col">Sugar</th>
        </tr>
        <tr>
          <th scope="row">Breakfast</th>
          <td>
            <button>+</button>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Lunch</th>
          <td scope="col">
            <button>+</button>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Dinner</th>
          <td scope="col">
            <button>+</button>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Snack</th>
          <td scope="col">
            <button>+</button>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        </tbody>
      </table>


      <table>
        <tbody>
        <tr>
        <th scope="row">Total</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
        <th scope="row">Daily Goal</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
        <th scope="row">Remaining Calories</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
       <tr>
        <th scope="row"></th>
          <th scope="col">Calories</th>
          <th scope="col">Servings</th>
          <th scope="col">Fats</th>
          <th scope="col">Protein</th>
          <th scope="col">Carbohydrates</th>
          <th scope="col">Sodium</th>
          <th scope="col">Sugar</th>
       </tr>
       </tbody>
      </table>
    </div>
  );
};

export default Calorie;

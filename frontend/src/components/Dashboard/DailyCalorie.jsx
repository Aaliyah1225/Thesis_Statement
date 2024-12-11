import "./DailyCalorie.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Calorie = () => {
  const [nutritionData, setNutritionData] = useState({
    Breakfast: [],
    Lunch: [],
    Dinner: [],
    Snack: [],

});

  useEffect(() => {
    const fetchNutritionData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/nutrition');
        setNutritionData(response.data);
      } catch (error) {
        console.error('Error fetching nutrition data:', error);
      }
    };
    fetchNutritionData();
    }, []);

  return (
    <div>
      <button>←</button><input type="date"></input><button>→</button>
      <h1>Weekly Calorie Tracker</h1>
      <table>
        <caption>Calorie Log Tracker</caption>
        <thead>
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
        </thead>
        <tbody>
        <tr>
          <th scope="row">Breakfast</th>
          <td>
            <Link to="/dashboard/breakfast">
            <button>+</button>
            </Link>
          </td>
            <td>{nutritionData.Breakfast.length > 0 && nutritionData.Breakfast[0].calories}</td>
            <td>{nutritionData.Breakfast.length > 0 && nutritionData.Breakfast[0].servings}</td>
            <td>{nutritionData.Breakfast.length > 0 && nutritionData.Breakfast[0].fat}</td>
            <td>{nutritionData.Breakfast.length > 0 && nutritionData.Breakfast[0].protein}</td>
            <td>{nutritionData.Breakfast.length > 0 && nutritionData.Breakfast[0].carbs}</td>
            <td>{nutritionData.Breakfast.length > 0 && nutritionData.Breakfast[0].sodium}</td>
            <td>{nutritionData.Breakfast.length > 0 && nutritionData.Breakfast[0].sugar}</td>
        </tr>

        <tr>
          <th scope="row">Lunch</th>
          <td scope="col">
          <Link to="/dashboard/lunch">
            <button>+</button>
            </Link>
          </td>
          <td>{nutritionData.Lunch.length > 0 && nutritionData.Lunch[0].calories}</td>
            <td>{nutritionData.Lunch.length > 0 && nutritionData.Lunch[0].servings}</td>
            <td>{nutritionData.Lunch.length > 0 && nutritionData.Lunch[0].fat}</td>
            <td>{nutritionData.Lunch.length > 0 && nutritionData.Lunch[0].protein}</td>
            <td>{nutritionData.Lunch.length > 0 && nutritionData.Lunch[0].carbs}</td>
            <td>{nutritionData.Lunch.length > 0 && nutritionData.Lunch[0].sodium}</td>
            <td>{nutritionData.Lunch.length > 0 && nutritionData.Lunch[0].sugar}</td>
        </tr>

        <tr>
          <th scope="row">Dinner</th>
          <td scope="col">
          <Link to="/dashboard/dinner">
            <button>+</button>
            </Link>
          </td>
            <td>{nutritionData.Dinner.length > 0 && nutritionData.Dinner[0].calories}</td>
            <td>{nutritionData.Dinner.length > 0 && nutritionData.Dinner[0].servings}</td>
            <td>{nutritionData.Dinner.length > 0 && nutritionData.Dinner[0].fat}</td>
            <td>{nutritionData.Dinner.length > 0 && nutritionData.Dinner[0].protein}</td>
            <td>{nutritionData.Dinner.length > 0 && nutritionData.Dinner[0].carbs}</td>
            <td>{nutritionData.Dinner.length > 0 && nutritionData.Dinner[0].sodium}</td>
            <td>{nutritionData.Dinner.length > 0 && nutritionData.Dinner[0].sugar}</td>
        </tr>

        <tr>
          <th scope="row">Snack</th>
          <td scope="col">
          <Link to="/dashboard/snack">
            <button>+</button>
          </Link>
          </td>
            <td>{nutritionData.Snack.length > 0 && nutritionData.Snack[0].calories}</td>
            <td>{nutritionData.Snack.length > 0 && nutritionData.Snack[0].servings}</td>
            <td>{nutritionData.Snack.length > 0 && nutritionData.Snack[0].fat}</td>
            <td>{nutritionData.Snack.length > 0 && nutritionData.Snack[0].protein}</td>
            <td>{nutritionData.Snack.length > 0 && nutritionData.Snack[0].carbs}</td>
            <td>{nutritionData.Snack.length > 0 && nutritionData.Snack[0].sodium}</td>
            <td>{nutritionData.Snack.length > 0 && nutritionData.Snack[0].sugar}</td>
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
          <th scope="col">Fats</th>
          <th scope="col">Protein</th>
          <th scope="col">Carbohydrates</th>
          <th scope="col">Sodium</th>
          <th scope="col">Sugar</th>
          <th scope="col">Servings</th>
       </tr>
       </tbody>
      </table>
    </div>
  );
};

export default Calorie;

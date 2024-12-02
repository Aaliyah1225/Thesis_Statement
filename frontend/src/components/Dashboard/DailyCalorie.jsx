import "./DailyCalorie.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Calorie = () => {


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
            <Link to="/dashboard/breakfast">
            <button>+</button>
            </Link>
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
          <Link to="/dashboard/lunch">
            <button>+</button>
            </Link>
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
          <Link to="/dashboard/dinner">
            <button>+</button>
            </Link>
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
          <Link to="/dashboard/snack">
            <button>+</button>
          </Link>
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

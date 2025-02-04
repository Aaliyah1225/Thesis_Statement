import "./DailyCalorie.css";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Calorie = () => {
  const [nutritionData, setNutritionData] = useState({
    Breakfast: [],
    Lunch: [],
    Dinner: [],
    Snack: [],
  });
  const [dailyGoal, setDailyGoal] = useState(2000);
  const [totalCalories, setTotalCalories] = useState(0);
  const [remainingCalories, setRemainingCalories] = useState(dailyGoal);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchNutritionData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/meal-data");
        setNutritionData(response.data);

        calculateTotals(response.data);
      } catch (error) {
        console.error("Error fetching nutrition data:", error);
      }
    };
    fetchNutritionData();
  }, []);

  const calculateTotals = (data) => {
    let totalCal = 0;
    let totalFat = 0;
    let totalProtein = 0;
    let totalCarbs = 0;
    let totalSodium = 0;
    let totalSugar = 0;

    Object.keys(data).forEach((mealCategory) => {
      data[mealCategory].forEach((foodItem) => {
        totalCal += foodItem.calories;
        totalFat += foodItem.fat;
        totalProtein += foodItem.protein;
        totalCarbs += foodItem.carbs;
        totalSodium += foodItem.sodium;
        totalSugar += foodItem.sugar;
      });
    });

    setDailyGoal(dailyGoal);
    setTotalCalories(totalCal);
    setRemainingCalories(dailyGoal - totalCal);
  };
  
  return (
    <div>
      <button>←</button>
      <input type="date" id="myDate"></input>
      <button>→</button>
      <h1>Weekly Calorie Tracker</h1>

      <table className="calorie-table">
        <caption>Calorie Log Tracker</caption>
        <thead>
          <tr>
            <th scope="row">Category</th>
            <th scope="row">Food Item</th>
            <th scope="row">Calories</th>
            <th scope="row">Servings</th>
            <th scope="row">Fats</th>
            <th scope="row">Protein</th>
            <th scope="row">Carbohydrates</th>
            <th scope="row">Sodium</th>
            <th scope="row">Sugar</th>
          </tr>
        </thead>
        <tbody>
          {/* Breakfast Section */}
          <tr>
            <th class="search-button" scope="row"><button onClick={() => navigate("/dashboard/breakfast")}>
                Breakfast
              </button>
              </th>
          </tr>
          {nutritionData.Breakfast.length > 0 ? (
            nutritionData.Breakfast.map((food, index) => (
              <tr key={index}>
                <td></td>
                <td>{food.foodItem}</td>
                <td>{food.calories}</td>
                <td>{food.servings}</td>
                <td>{food.fat}</td>
                <td>{food.protein}</td>
                <td>{food.carbs}</td>
                <td>{food.sodium}</td>
                <td>{food.sugar}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9">No data available</td>
            </tr>
          )}

          <tr>
            <td className="search-button" scope="row"><button onClick={() => navigate("/dashboard/lunch")}>
                Lunch
              </button></td>
          </tr>
          {nutritionData.Lunch.length > 0 ? (
            nutritionData.Lunch.map((food, index) => (
              <tr key={index}>
                <th></th>
                <td>{food.foodItem}</td>
                <td>{food.calories}</td>
                <td>{food.servings}</td>
                <td>{food.fat}</td>
                <td>{food.protein}</td>
                <td>{food.carbs}</td>
                <td>{food.sodium}</td>
                <td>{food.sugar}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9">No data available</td>
            </tr>
          )}
          {/* Dinner Section */}
          <tr>
            <td className="search-button" scope="row"><button onClick={() => navigate("/dashboard/dinner")}>
                Dinner
              </button></td>
          </tr>
          {nutritionData.Dinner.length > 0 ? (
            nutritionData.Dinner.map((food, index) => (
              <tr key={index}>
                <th></th>
                <td>{food.foodItem}</td>
                <td>{food.calories}</td>
                <td>{food.servings}</td>
                <td>{food.fat}</td>
                <td>{food.protein}</td>
                <td>{food.carbs}</td>
                <td>{food.sodium}</td>
                <td>{food.sugar}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9">No data available</td>
            </tr>
          )}

          {/* Snack Section */}
          <tr>
            <td className="search-button" scope="row"><button onClick={() => navigate("/dashboard/snack")}>
                Snack
              </button></td>
          </tr>
          {nutritionData.Snack.length > 0 ? (
            nutritionData.Snack.map((food, index) => (
              <tr key={index}>
                <th></th>
                <td>{food.foodItem}</td>
                <td>{food.calories}</td>
                <td>{food.servings}</td>
                <td>{food.fat}</td>
                <td>{food.protein}</td>
                <td>{food.carbs}</td>
                <td>{food.sodium}</td>
                <td>{food.sugar}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9">No data available</td>
            </tr>
          )}
        </tbody>
      </table>

      <table className="calorie-counter">
        <tbody>
          <tr>
            <th scope="row">Total</th>
            <td colSpan="7">{totalCalories}</td>
          </tr>
          <tr>
            <th scope="row">Daily Goal</th>
            <td colSpan="7">{dailyGoal}</td>
          </tr>
          <tr>
            <th scope="row">Remaining</th>
            <td colSpan="7">{remainingCalories}</td>
          </tr>
          <tr>
            <th scope="col"></th>
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

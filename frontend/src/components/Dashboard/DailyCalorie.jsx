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
          {/* Breakfast Section */}
          <tr>
            <th scope="row">Breakfast</th>
            <td>
              <button onClick={() => navigate("/dashboard/breakfast")}>
                Go to Breakfast
              </button>
            </td>
          </tr>
          {nutritionData.Breakfast.length > 0 ? (
            nutritionData.Breakfast.map((food, index) => (
              <tr key={index}>
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
              <td colSpan="8">No data available</td>
            </tr>
          )}

          <tr>
            <th scope="row">Lunch</th>
            <td>
              <button onClick={() => navigate("/dashboard/lunch")}>
                Go to Lunch
              </button>
            </td>
          </tr>
          {nutritionData.Lunch.length > 0 ? (
            nutritionData.Lunch.map((food, index) => (
              <tr key={index}>
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
              <td colSpan="8">No data available</td>
            </tr>
          )}
          {/* Dinner Section */}
          <tr>
            <th scope="row">Dinner</th>
            <td>
              <button onClick={() => navigate("/dashboard/dinner")}>
                Go to Dinner
              </button>
            </td>
          </tr>
          {nutritionData.Dinner.length > 0 ? (
            nutritionData.Dinner.map((food, index) => (
              <tr key={index}>
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
              <td colSpan="8">No data available</td>
            </tr>
          )}

          {/* Snack Section */}
          <tr>
            <th scope="row">Dinner</th>
            <td>
              <button onClick={() => navigate("/dashboard/dinner")}>
                Go to Dinner
              </button>
            </td>
          </tr>
          {nutritionData.Dinner.length > 0 ? (
            nutritionData.Dinner.map((food, index) => (
              <tr key={index}>
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
              <td colSpan="8">No data available</td>
            </tr>
          )}
        </tbody>
      </table>

      <table>
        <tbody>
          <tr>
            <th scope="row">Total Calories</th>
            <td colSpan="5">{totalCalories} Calories</td>
          </tr>
          <tr>
            <th scope="row">Daily Goal</th>
            <td colSpan="5">{dailyGoal} Calories</td>
          </tr>
          <tr>
            <th scope="row">Remaining Calories</th>
            <td colSpan="5">{remainingCalories} Calories</td>
          </tr>
          <tr>
            <th scope="row">Total</th>
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

import "./DailyCalorie.css";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Calorie() {
  const [nutritionData, setNutritionData] = useState({
    Breakfast: [],
    Lunch: [],
    Dinner: [],
    Snack: [],
  });
  const [dailyCalorieGoal, setDailyCalorieGoal] = useState(2000);
  const [dailyFatGoal, setDailyFatGoal] = useState(65);
  const [dailyProteinGoal, setDailyProteinGoal] = useState(50);
  const [dailyCarbGoal, setDailyCarbGoal] = useState(300);
  const [dailySodiumGoal, setDailySodiumGoal] = useState(2400);
  const [dailySugarGoal, setDailySugarGoal] = useState(50);

  const [totalCalories, setTotalCalories] = useState(0);
  const [totalFat, setTotalFat] = useState(0);
  const [totalProtein, setTotalProtein] = useState(0);
  const [totalCarbs, setTotalCarbs] = useState(0);
  const [totalSodium, setTotalSodium] = useState(0);
  const [totalSugar, setTotalSugar] = useState(0);

  const [remainingCalories, setRemainingCalories] = useState(dailyCalorieGoal);
  const [remainingFat, setRemainingFat] = useState(dailyFatGoal);
  const [remainingProtein, setRemainingProtein] = useState(dailyProteinGoal);
  const [remainingCarbs, setRemainingCarbs] = useState(dailyCarbGoal);
  const [remainingSodium, setRemainingSodium] = useState(dailySodiumGoal);
  const [remainingSugar, setRemainingSugar] = useState(dailySugarGoal);

  const [selectedDate, setSelectedDate] = useState(
    new Date());
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

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handlePreviousDay = () => {
    const currentDate = new Date(selectedDate);
    currentDate.setDate(currentDate.getDate() - 1);
    setSelectedDate(currentDate.toISOString().substring(0, 10));
  };

  const handleNextDay = () => {
    const currentDate = new Date(selectedDate);
    currentDate.setDate(currentDate.getDate() + 1);
    setSelectedDate(currentDate.toISOString().substring(0, 10));
  };


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

    setDailyCalorieGoal(dailyCalorieGoal);
    setDailyFatGoal(dailyFatGoal);
    setDailyProteinGoal(dailyProteinGoal);
    setDailyCarbGoal(dailyCarbGoal);
    setDailySodiumGoal(dailySodiumGoal);
    setDailySugarGoal(dailySugarGoal);

    setTotalCalories(totalCal);
    setTotalFat(totalFat);
    setTotalProtein(totalProtein);
    setTotalCarbs(totalCarbs);
    setTotalSodium(totalSodium);
    setTotalSugar(totalSugar);

    setRemainingCalories(dailyCalorieGoal - totalCal);
    setRemainingFat(dailyFatGoal - totalFat);
    setRemainingProtein(dailyProteinGoal - totalProtein);
    setRemainingCarbs(dailyCarbGoal - totalCarbs);
    setRemainingSodium(dailySodiumGoal - totalSodium);
    setRemainingSugar(dailySugarGoal - totalSugar);
  };

  const handleDeleteFood = (mealCategory, index) => {
    const updatedNutritionData = { ...nutritionData };
    updatedNutritionData[mealCategory].splice(index, 1);
    setNutritionData(updatedNutritionData);
    calculateTotals(updatedNutritionData);
  };

  return (
    <div>
      <button onClick={handlePreviousDay}>&larr;</button>
      <time dateTime={selectedDate}>{new Date(selectedDate).toLocaleDateString()}</time>
      <button onClick={handleNextDay}>&rarr;</button>

      <h2 className="tracker-title">Daily Calorie Tracker</h2>
      <form>
        <table className="calorie-table">
          <caption>Calorie Log Tracker</caption>
          <thead>
            <tr>
              <th scope="row">Category</th>
              <th scope="row">Search Foods</th>
              <th scope="row">Food Item</th>
              <th scope="row">Calories</th>
              <th scope="row">Servings</th>
              <th scope="row">Fats</th>
              <th scope="row">Protein</th>
              <th scope="row">Carbohydrates</th>
              <th scope="row">Sodium</th>
              <th scope="row">Sugar</th>
              <th scope="row">Action Button</th>
            </tr>
          </thead>
          <tbody>
            {/* Breakfast Section */}
            <tr>
              <th>Breakfast</th>
              <td className="search-button-row" scope="row">
                <button
                  className="search-button"
                  onClick={() => navigate("/dashboard/breakfast")}
                >
                  Breakfast
                </button>
              </td>
            </tr>
            {nutritionData.Breakfast.length > 0 &&
              nutritionData.Breakfast.map((food, index) => (
                <tr key={index}>
                  <td></td>
                  <td></td>
                  <td>{food.foodItem}</td>
                  <td>{food.calories}</td>
                  <td>{food.servings}</td>
                  <td>{food.fat}</td>
                  <td>{food.protein}</td>
                  <td>{food.carbs}</td>
                  <td>{food.sodium}</td>
                  <td>{food.sugar}</td>
                  <td>
                    <button
                      type="button"
                      className="delete"
                      onClick={() => handleDeleteFood("Breakfast", index)}
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}

            <tr>
              <th>Lunch</th>
              <td className="search-button-row" scope="row">
                <button
                  className="search-button"
                  onClick={() => navigate("/dashboard/lunch")}
                >
                  Lunch
                </button>
              </td>
            </tr>
            {nutritionData.Lunch.length > 0 &&
              nutritionData.Lunch.map((food, index) => (
                <tr key={index}>
                  <td></td>
                  <td></td>
                  <td>{food.foodItem}</td>
                  <td>{food.calories}</td>
                  <td>{food.servings}</td>
                  <td>{food.fat}</td>
                  <td>{food.protein}</td>
                  <td>{food.carbs}</td>
                  <td>{food.sodium}</td>
                  <td>{food.sugar}</td>
                  <td>
                    <button
                      type="button"
                      className="delete"
                      onClick={() => handleDeleteFood("Lunch", index)}
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            {/* Dinner Section */}
            <tr>
              <th>Dinner</th>
              <td className="search-button-row" scope="row">
                <button
                  className="search-button"
                  onClick={() => navigate("/dashboard/dinner")}
                >
                  Dinner
                </button>
              </td>
            </tr>
            {nutritionData.Dinner.length > 0 &&
              nutritionData.Dinner.map((food, index) => (
                <tr key={index}>
                  <td></td>
                  <td></td>
                  <td>{food.foodItem}</td>
                  <td>{food.calories}</td>
                  <td>{food.servings}</td>
                  <td>{food.fat}</td>
                  <td>{food.protein}</td>
                  <td>{food.carbs}</td>
                  <td>{food.sodium}</td>
                  <td>{food.sugar}</td>
                  <td>
                    <button
                      type="button"
                      className="delete"
                      onClick={() => handleDeleteFood("Dinner", index)}
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            {/* Snack Section */}
            <tr>
              <th>Snack</th>
              <td className="search-button-row" scope="row">
                <button
                  className="search-button"
                  onClick={() => navigate("/dashboard/snack")}
                >
                  Snack
                </button>
              </td>
            </tr>
            {nutritionData.Snack.length > 0 &&
              nutritionData.Snack.map((food, index) => (
                <tr key={index}>
                  <td></td>
                  <td></td>
                  <td>{food.foodItem}</td>
                  <td>{food.calories}</td>
                  <td>{food.servings}</td>
                  <td>{food.fat}</td>
                  <td>{food.protein}</td>
                  <td>{food.carbs}</td>
                  <td>{food.sodium}</td>
                  <td>{food.sugar}</td>
                  <td>
                    <button
                      type="button"
                      className="delete"
                      onClick={() => handleDeleteFood("Snack", index)}
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </form>
      <table className="calorie-counter">
        <caption>Daily Goal Tracker</caption>
        <tbody>
          <tr>
            <th scope="row">Total</th>
            <td>{totalCalories}</td>
            <td>{totalFat}</td>
            <td>{totalProtein}</td>
            <td>{totalCarbs}</td>
            <td>{totalSodium}</td>
            <td>{totalSugar}</td>
          </tr>
          <tr>
            <th scope="row">Daily Goal</th>
            <td>{dailyCalorieGoal}</td>
            <td>{dailyFatGoal}</td>
            <td>{dailyProteinGoal}</td>
            <td>{dailyCarbGoal}</td>
            <td>{dailySodiumGoal}</td>
            <td>{dailySugarGoal}</td>
          </tr>
          <tr>
            <th scope="row">Remaining</th>
            <td>{remainingCalories}</td>
            <td>{remainingFat}</td>
            <td>{remainingProtein}</td>
            <td>{remainingCarbs}</td>
            <td>{remainingSodium}</td>
            <td>{remainingSugar}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Calories</th>
            <th scope="col">Fats</th>
            <th scope="col">Protein</th>
            <th scope="col">Carbohydrates</th>
            <th scope="col">Sodium</th>
            <th scope="col">Sugar</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default Calorie;

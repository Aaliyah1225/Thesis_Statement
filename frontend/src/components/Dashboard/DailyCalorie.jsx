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
  const [dailyGoal, setDailyGoal] = useState(2000); // Example goal, change as needed
  const [totalCalories, setTotalCalories] = useState(0);
  const [remainingCalories, setRemainingCalories] = useState(dailyGoal);

  useEffect(() => {
    const fetchNutritionData = async () => {
      try {
        const response = await axios.post('http://localhost:3001/nutrition', {}, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

        setNutritionData(response.data);
        calculateTotals(response.data);
      } catch (error) {
        console.error('Error fetching nutrition data:', error);
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
  
      setTotalCalories(totalCal);
      setRemainingCalories(dailyGoal - totalCal);
    };
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
        {["Breakfast", "Lunch", "Dinner", "Snack"].map((mealCategory) => (
            <tr key={mealCategory}>
              <th scope="row">{mealCategory}</th>
              <td>
              <Link
                  to={{
                    pathname: `/dashboard/${mealCategory.toLowerCase()}`,
                    state: { foodData: nutritionData[mealCategory] }, // Passing the entire meal category
                  }}
                >
                  <button>+/</button>
                  </Link>
                  </td>
        {nutritionData[mealCategory].map((food, index) => (
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
          ))}
          </tr>
        ))}
        </tbody>
      </table>

      <table>
        <tbody>
        <tr>
        <th scope="row">Total</th>
            <td>{nutritionData.Breakfast.reduce((acc, food) => acc + food.fat, 0)}</td>
            <td>{nutritionData.Breakfast.reduce((acc, food) => acc + food.protein, 0)}</td>
            <td>{nutritionData.Breakfast.reduce((acc, food) => acc + food.carbs, 0)}</td>
            <td>{nutritionData.Breakfast.reduce((acc, food) => acc + food.sodium, 0)}</td>
            <td>{nutritionData.Breakfast.reduce((acc, food) => acc + food.sugar, 0)}</td>
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

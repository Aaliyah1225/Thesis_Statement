import "./CalorieLog.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
const Calorie = () => {
  const [ food, setFood ] = useState('');
  const [ calories, setCalories ] = useState ('');
  const [ searchResults, setSearchResults] = useState([]);
  const [ totalCalories, setTotalCalories] = useState(0);
  const navigate = useNavigate();

  
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

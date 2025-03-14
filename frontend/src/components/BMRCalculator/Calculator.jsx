import "./Calculator.css";
import React from "react";
import { useState } from "react";

function BMRCalculator() {
  const [sex, setSex] = useState("male");
  const [weight, setWeight] = useState("");
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInch, setHeightInch] = useState("");
  const [age, setAge] = useState("");
  const [bmr, setBmr] = useState(null);

  const calculateBMR = (e) => {
    e.preventDefault();

    const totalHeight = parseInt(heightFeet) * 12 + parseInt(heightInch);
    const height = totalHeight * 2.54;
    const weightLB = parseFloat(weight) / 2.20462;

    let calculatedBMR;
    if (sex === "male") {
      calculatedBMR = 88.362 + 13.397 * weightLB + 4.799 * height - 5.677 * age;
    } else if (sex === "female") {
      calculatedBMR = 443.593 + 9.247 * weightLB + 3.098 * height - 4.33 * age;
    }

    setBmr(calculatedBMR);
  };

  return (
    <div class="container">
      <h2>Basal Metallic Rate Calculator</h2>
    <form onSubmit={calculateBMR}>
      <div className="input-group">
        <label htmlFor="sex">Sex:</label><br />
          <input
            type="radio"
            id="male"
            name="sex"
            value="male"
            checked={sex === "male"}
            onChange={() => setSex("male")}
          />
          <label htmlFor="male">Male</label>
          <br />
          <input
            type="radio"
            id="female"
            name="sex"
            value="female"
            checked={sex === "female"}
            onChange={() => setSex("female")}
          />
          <label htmlFor="male">Female</label>
          <br />
          <br />
      </div>

      <div className="input-group">
        <label htmlFor="age">Age:</label>
        <br />
        <input
          type="number"
          value={age}
          placeholder="Enter your Age"
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <br />
        <br />
      </div>

      <div className="input-group">
          <label htmlFor="height">Height (ft):</label>
          <br />
          <input
            type="number"
            value={heightFeet}
            placeholder="Enter your Height (ft)"
            onChange={(e) => setHeightFeet(e.target.value)}
          />
          <br />
          <label htmlFor="height">Height (in):</label>
          <br />
          <input
            type="number"
            value={heightInch}
            placeholder="Enter your Height (in)"
            onChange={(e) => setHeightInch(e.target.value)}
          />
          <br />
          <br />
      </div>

      <div className="input-group">
        <label htmlFor="weight">Weight (lbs):</label>
        <br />
        <input
          type="number"
          value={weight}
          placeholder="Enter your Weight"
          onChange={(e) => setWeight(e.target.value)}
          required
        />
        <br />
        <br />
      </div>

      <button type="submit">Calculate BMR</button>
      </form>

    {bmr && <div> Your BMR is {bmr.toFixed(2)} calories per day</div>}
    </div>
  );
}

export default BMRCalculator;

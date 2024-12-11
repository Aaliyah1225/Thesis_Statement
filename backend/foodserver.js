const express = require("express");
const app = express();
const port = 3001;
const axios = require('axios');
require("dotenv").config();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const APP_ID = process.env.NUTRITIONIX_API_ID;
const APP_KEY = process.env.NUTRITIONIX_API_KEY;

let mealData = {
  Breakfast: [],
  Lunch: [],
  Dinner: [],
  Snack: [],
};

const axiosInstance = axios.create({
  baseURL:'https://trackapi.nutritionix.com/v2',
  params: {
    "Content-Type": "application/json",
    "x-app-id": APP_ID,
    "x-app-key": APP_KEY,
  }
});

app.get("/search-nutrition", async (req, res) => {
const query = req.query;

console.log("Received query:", query)
  if (!query) {
    return res.status(400).json({ error: "Query parameter is required." });
   }

  try {
    const response = await axiosInstance.get('search/instant',
      {
        params: { query }
      });
      const firstMatch = response.data.branded[0] || response.data.common[0];

      if (!firstMatch) {
      res.json(firstMatch);
    } else {
      res.status(404).json({ error: 'Food not found' });
    }
    } catch (error) {
      console.error('Error fetching search results:', error);
      res.status(500).json({ error: 'Error fetching search results' });
    }
  });
  
  app.post('nutrition/', async (req, res) => {
    const { foodItem, servings, servingsSize } = req.body;
    console.log("Received params", params)
    if (!params) {
      return res.status(400).json({ error: "Food ID Parameter is required" });
     }
    try {
      const response = await axios.get('natural/nutrients', {
        body: JSON.stringify({ "query": `${foodItem} ${servings} ${servingSize}` })
    });

    const foodData = response.data.foods[0];
    mealData[mealCategory].push({
      foodItem: foodData.food_name,
      calories: foodData.nf_calories,
      carbs: foodData.nf_total_carbohydrate,
      protein: foodData.nf_protein,
      fat: foodData.nf_total_fat,
      fiber: foodData.nf_dietary_fiber,
      servingSize: `${foodData.serving_qty} ${foodData.serving_unit}`,
    });
   } catch (error) {
      console.error('Error fetching nutritional data:', error);
      res.status(500).json({ error: 'Failed to fetch nutritional data' });
    }
  });

  app.get('/mealData', (req, res) => {
    res.json(mealData);
  });
  
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });

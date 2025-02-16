const express = require("express");
const app = express();
const port = 3001;
const axios = require('axios');
require("dotenv").config();
const cors = require("cors");
app.use(cors());

const corsOptions = {
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));
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
  baseURL:'https://trackapi.nutritionix.com/v2/',
  headers: {
    "x-app-id": APP_ID,
    "x-app-key": APP_KEY,
  }
});

app.get("/meal-data", (req, res) => {
  // Return the current meal data stored on the server
  res.json(mealData);
});

app.get("/search-nutrition", async (req, res) => {
const query = req.query.query;

console.log("Received query:", query);

  if (!query) {
    return res.status(400).json({ error: "Query parameter is required." });
   }

  try {
    const response = await axiosInstance.get('search/instant',
      {
        params: { query },
      });
      const brandedFoods = response.data.branded || [];
      const commonFoods = response.data.common || [];

      const allFoods = [...brandedFoods, ...commonFoods];

      if (allFoods.length === 0) {

      return res.status(404).json({ error: 'Food not found' });
    }


    res.json(allFoods)
    } catch (error) {
      console.error('Error fetching search results:', error);
      res.status(500).json({ error: 'Error fetching search results' });
    }
  });
  
  app.post("/nutrition", async (req, res) => {
    const { foodItem, servings, servingUnit, mealCategory, action } = req.body;
    console.log("Received params", req.body);

      if (!foodItem || !servings || !servingUnit || !mealCategory || !action) {
      return res.status(400).json({ error: "Food ID Parameter is required" });
     }

    try {
      const response = await axiosInstance.post('natural/nutrients', {
        query: `${foodItem} ${servings} ${servingUnit}`,
    });

    if (!response.data || !response.data.foods || response.data.foods.length === 0) {
      return res.status(404).json({ error: 'No food data returned from Nutritionix API' });
    }
    
    const foodData = response.data.foods[0];

    const adjustedNutrition = {
      foodItem: foodData.food_name,
      calories: foodData.nf_calories * servings, 
      carbs: foodData.nf_total_carbohydrate * servings,
      protein: foodData.nf_protein * servings,
      fat: foodData.nf_total_fat * servings,
      sugar: foodData.nf_sugars * servings,
      sodium: foodData.nf_sodium * servings,
      servingSize: foodData.serving_weight_grams,
      servings: foodData.serving_qty,
      servingUnit: foodData.serving_unit,
      mealCategory,
    };

    if (!mealData[mealCategory]) {
      mealData[mealCategory] = [];
    }
    if (action === "update") {
    mealData[mealCategory].push(adjustedNutrition);
  }
    res.json(mealData);
   } catch (error) {
      console.error('Error fetching nutritional data:', error);
      res.status(500).json({ error: 'Failed to fetch nutritional data' });
    }
  });
  
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });

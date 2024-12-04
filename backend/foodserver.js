const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json()); // To parse JSON data

// Nutritionix API configuration
const NUTRITIONIX_API_URL = 'https://api.nutritionix.com/v1_1/search/';
const NUTRITIONIX_APP_ID = 'YOUR_NUTRITIONIX_APP_ID';  // Replace with your app ID
const NUTRITIONIX_API_KEY = 'YOUR_NUTRITIONIX_API_KEY';  // Replace with your API key

// Route to search for food via Nutritionix API
app.get('/api/food/search', async (req, res) => {
  const query = req.query.query;  // The search query (food item)
  try {
    const response = await axios.get(`${NUTRITIONIX_API_URL}${query}`, {
      params: {
        appId: NUTRITIONIX_APP_ID,
        appKey: NUTRITIONIX_API_KEY,
      },
    });

    const foodData = response.data.hits.map((hit) => ({
      name: hit.fields.item_name,
      calories: hit.fields.nf_calories,
      serving_size: hit.fields.nf_serving_size_qty,
      serving_unit: hit.fields.nf_serving_size_unit,
      fats: hit.fields.nf_total_fat,
      protein: hit.fields.nf_protein,
      carbs: hit.fields.nf_total_carbohydrate,
      sodium: hit.fields.nf_sodium,
      sugar: hit.fields.nf_sugars,
    }));

    res.status(200).json(foodData);
  } catch (error) {
    console.error('Error fetching data from Nutritionix', error);
    res.status(500).json({ message: 'Failed to fetch food data' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
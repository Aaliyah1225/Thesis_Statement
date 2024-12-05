const express = require("express");
const app = express();
const port = 3001;
const axios = require('axios');
require("dotenv").config();
const cors = require("cors");
const bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.json());

const APP_ID = process.env.NUTRITIONIX_API_ID;
const APP_KEY = process.env.NUTRITIONIX_API_KEY;

app.get("/get-nutrition", async (req, res) => {
const query = req.query;

console.log("Received query:", query)
  if (!query) {
    return res.status(400).json({ error: "Query parameter is required." });
  }

  try {
    const response = await axios.get("https://trackapi.nutritionix.com/v2/search/instant",
      {
        headers: {
          "Content-Type": "application/json",
          "x-app-id": APP_ID,
          "x-app-key": APP_KEY
        },
        params: { "query": data }
      });

    if (!response.data) {
      throw new error("Failed to fetch data from Nutritionix");
    }
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching from Nutritionix:", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

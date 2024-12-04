const express = require("express");
const app = express();
const port = 3001;
require("dotenv").config();
const cors = require("cors");

app.use(cors());

const APP_ID = process.env.API_ID;
const APP_KEY = process.env.API_KEY;

app.get("/search", async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: "Query parameter is required." });
  }

  try {
    const response = await fetch("https://trackapi.nutritionix.com/v2/natural/nutrients",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "x-app-id": APP_ID,
          "x-app-key": APP_KEY,
        },
        body: { query },
      }
    );

    if (!response.ok) {
      throw new error("Failed to fetch data from Nutritionix");
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching from Nutritionix:", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

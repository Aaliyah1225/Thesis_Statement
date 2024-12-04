const express = require("express");
const app = express();
// const port = 3001;
const axios = require('axios');
// require("dotenv").config();
const cors = require("cors");
const router = express.Router();

app.use(cors());

const APP_ID = process.env.API_ID;
const APP_KEY = process.env.API_KEY;

router.post("/get-nutrition", async (req, res) => {
const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: "Query parameter is required." });
  }

  try {
    const response = await axios.post('https://trackapi.nutritionix.com/v2/natural/nutrients',
      { query: foodItem },
      {
        headers: {
          "Content-Type": "application/json",
          "x-app-id": APP_ID,
          "x-app-key": APP_KEY,
        },
      }
    );

    if (!response.ok) {
      throw new error("Failed to fetch data from Nutritionix");
    }
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching from Nutritionix:", error);
    res.status(500).json({ error: error.message });
  }
});
// app.listen(port, () => {
//   console.log(`Server listening on port http://localhost:${port}`);
// });

module.exports = router;
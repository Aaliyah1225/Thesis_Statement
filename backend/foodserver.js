const express = require('express');
const axios = require('axios');
const app = express();
const port = 8080;

app.use(express.json());

app.post('/api/nutrition',
 async (req, res) => {
  const { query } = req.body;
  const apiID = process.env.NUTRITIONIX_API_ID;
  const apiKey = process.env.NUTRIONIX_API_KEY;

  try {
    const response = await axios.get('https://trackapi.nutritionix.com/v2/natural/nutrients', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'x-app-id': apiID,
        'x-app-key': apiKey,
      },
      body: JSON.stringify({ query })
    });

    const data = await response.json();
    const nutrients = data.foods[0].nutrients;

    res.json(nutrients);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch nutrition data' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});

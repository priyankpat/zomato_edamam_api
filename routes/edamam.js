const express = require('express');
const router = express.Router();

const Edaman_APIKEY = `218dac30f404807574a26fe7f423a3f3`;



router.post('/nutrition-details', (req, res) => {
  const nutritionUrl = `https://api.edamam.com/api/nutrition-details`;
  res.send("FUCK");
})

module.exports = router;
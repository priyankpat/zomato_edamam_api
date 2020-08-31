require("dotenv").config();
const express = require("express");
const router = express.Router();
const zomato = require("zomato-api");
const axios = require("axios");

const Zomato_APIKEY = `272bae557b31afdb9c6309157bbe91d4`;

const client = zomato({
  userKey: Zomato_APIKEY,
});

router.get("/restaurant/:id", (req, res) => {
  const res_id = req.params.id;
  client
    .getRestaurant({ res_id })
    .then((data) => {
      return res.status(200).json(data);
    })
    .catch((err) => {
      return res.status(500).json({
        error: "Unable to obtain the data",
      });
    });
});

router.get("/dailymenu/:id", (req, res) => {
  const res_id = req.params.id;
  client
    .getDailyMenu({ res_id: res_id })
    .then((data) => {
      return res.status(200).json(data);
    })
    .catch((err) => {
      return res.status(500).json({
        error: "Unable to obtain the data",
      });
    });
});

module.exports = router;

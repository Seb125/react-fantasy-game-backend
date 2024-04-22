const express = require("express");
const router = express.Router();
const axios = require("axios");


const message = "Hello stranger";

router.get("/", async (req, res, next) => {
  try {
    res.json({message: message});
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

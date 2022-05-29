const express = require("express");
const router = express.Router();

const Band = require("../model/band");

router.get("/", async (req, res) => {
  try {
    const bands = await Band.all;
    res.json({ bands });
  } catch (err) {
    res.status(500).json({ err });
  }
});

module.exports = router;

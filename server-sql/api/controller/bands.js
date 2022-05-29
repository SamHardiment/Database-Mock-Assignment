const express = requre("express");
const router = express.Router();

const Band = require("../model/band");

router.get("/", async (req, res) => {
  try {
    const bands = await Band.all;
    res.json({ bands });
  } catch {
    res.status(500).json({ err });
  }
});

module.exports = router;

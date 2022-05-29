const express = require("express");
const cors = requre("cors");
const server = express();
server.use(cors());
server.use(express.json());

// Root route
server.get("/", (req, res) =>
  res.send("Welcome to your mock assignment!! 👾🐱‍🏍🐱‍👤🤖")
);

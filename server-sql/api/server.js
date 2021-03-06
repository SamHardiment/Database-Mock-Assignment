const express = require("express");
const cors = require("cors");
const server = express();
server.use(cors());
server.use(express.json());

// Root route
server.get("/", (req, res) =>
  res.send("Welcome to your mock assignment!! πΎπ±βππ±βπ€π€")
);
const bandRoutes = require("./controller/bands");

server.use("/bands", bandRoutes);
// server.use("/genre", genreRoutes);

module.exports = server;

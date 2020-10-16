const express = require("express");

const gamesRouter = require("./routes/games");

const app = express();

app.use("/games", gamesRouter);

module.exports = app;
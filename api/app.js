const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const gamesRouter = require("./routes/games");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/games", gamesRouter);

app.listen(8081, () => {
    console.log("Listening on port 8081");
});

module.exports = app;
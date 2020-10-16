const express = require("express");
const router = express.Router();
const GameData = require('../queries');

router.get('/', (req, res) => {
    GameData.getAllGames(req, res);
});

router.get('/:gameId', (req, res) => {
    if(req.params.gameId) {
        const gameId = req.params.gameId;
        GameData.getGameById(gameId, req, res);
    } else {
        console.error(req.params);
    }
});

module.exports = router;
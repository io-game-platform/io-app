const express = require("express");
const router = express.Router();
const GameData = require('../queries/GameData');

router.get('/', (req, res) => {
    console.log('All games request');
    GameData.getAllGames(req, res);
});

router.get('/:gameId', (req, res) => {
    console.log('Game info request for: ' + gameId);
    if(req.params.gameId) {
        const gameId = req.params.gameId;
        GameData.getGameById(gameId, req, res);
    } else {
        console.error(req.params);
    }
});

router.post('/', (req, res) => {
    console.log('Save game request');
    GameData.saveGame(req.body);
    res.status(200).send();
});

module.exports = router;

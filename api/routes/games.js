const express = require("express");
const router = express.Router();
const GameData = require('../queries/GameData');

router.get('/', async (req, res, next) => {
    try {
	console.log('All games request');
        const allGames = await GameData.getAllGames();
        if (!allGames) {
            return res.sendStatus(404);
        }
        req.games = allGames;
        res.json(req.games);
    } catch (e) {
        console.error(e);
        next(e);
    }

});

router.get('/:gameId', async (req, res, next) => {
    try {
	console.log('Game info request for: ' + req.params.gameId)
        if (req.params.gameId) {
            const gameId = req.params.gameId;
            const game = await GameData.getGameById(gameId);
            if (!game) {
                return res.sendStatus(404);
            }
            req.game = game;
            res.json(req.game);
        } else {
            console.error(req.params);
        }
    } catch (e) {
        console.error(e);
        next(e);
    }
});

router.post('/', (req, res) => {
    console.log('Save game request');
    GameData.saveGame(req.body);
    res.status(200).send();
});

module.exports = router;

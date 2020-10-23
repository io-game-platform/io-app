
// Array to temporarily act as a local database
let games = [];

const getAllGames = (req, res) => {
    res.send(games);
}

const getGameById = (id, req, res) => {
    const game = games.filter(g => (g.id === parseInt(req.params.gameId)));
    if (game.length > 1) return res.status(500).send();
    if (game.length === 0) return res.status(404).send();
    res.send(game[0]);
}

const saveGame = (game) => {
    const { id, name } = game;
    const newGame = {
        id: id,
        name: name
    };
    games.push(newGame);
}

module.exports = {
    getAllGames,
    getGameById,
    saveGame
}
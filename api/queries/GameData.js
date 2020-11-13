const knex = require("../../knex");

class GameData {

    static async getAllGames() {
        let games = await knex("games").select("*");
        return games;
    }

    static async getGameById(id) {
        let [game] = await knex("games").select("*").where({id: id}).limit(1);
        return game;
    }

}

module.exports = GameData;
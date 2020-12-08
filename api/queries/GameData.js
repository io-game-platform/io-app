const knex = require("../knex");

class GameData {

    static async getAllGames() {
        let games = await knex("game").select("*");
        return games;
    }

    static async getGameById(id) {
        let [game] = await knex("game").select("*").where({id: id}).limit(1);
        return game;
    }

}

module.exports = GameData;

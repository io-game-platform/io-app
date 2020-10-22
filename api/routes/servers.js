const express = require("express");
const router = express.Router();
const ServerData = require("../queries/ServerData");

router.get('/', (req, res) => {
    ServerData.getAllServers(req, res);
});

router.get('/:serverId', (req, res) => {
    if(req.params.serverId) {
        const serverId = req.params.serverId;
        ServerData.getServerById(serverId, req, res);
    } else {
        console.error(req.params);
    }
});

module.exports = router;
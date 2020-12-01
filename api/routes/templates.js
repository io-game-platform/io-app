const express = require("express");
const router = express.Router();
const TemplateData = require("../queries/TemplateData");

// Get all server templates
router.get('/', (req, res, next) => {
    try {
        const allTemplates = TemplateData.getAllTemplates();
        if (!allTemplates) {
            return res.sendStatus(404);
        }
        req.templates = allTemplates;
        res.json(req.templates);
    } catch (e) {
        console.error(e);
        next(e);
    }
});

router.post('/', (req, res, next) => {
   try {
       TemplateData.saveTemplate(req.body);
       res.status(200).send();
   } catch (e) {
       console.error(e);
       next(e);
   }
});

module.exports = router;
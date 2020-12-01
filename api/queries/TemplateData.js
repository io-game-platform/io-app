
// Array to temporarily act as a local database
let templates = [];

class TemplateData {

    static getAllTemplates(req, res) {
        res.send(templates);
    }

    static saveTemplate(template) {
        templates.push(template);
    }

}

module.exports = TemplateData;
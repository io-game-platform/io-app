
// Array to temporarily act as a local database
let templates = [];

class TemplateData {

    static getAllTemplates() {
        return templates;
    }

    static saveTemplate(template) {
        templates.push(template);
    }

}

module.exports = TemplateData;
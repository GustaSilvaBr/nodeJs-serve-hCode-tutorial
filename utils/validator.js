const { check, validationResult } = require('express-validator');

module.exports = {

    checkFields: () => {
        return [

        ]
    },

    reportFieldsValidation: (app, req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return app.utils.error.send(errors, req, res);
        } else {
            return true
        }
    }

}
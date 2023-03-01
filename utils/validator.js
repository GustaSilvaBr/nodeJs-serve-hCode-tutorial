const {check, validationResult} = require('express-validator');

module.exports = {

    checkFields:()=>{
        return [
        check('_email', 'invalid email').isEmail(),
        check('_password', 'min passwords characters: 5').isLength({min:5}),
    ]},

    reportFieldsValidation:(app, req, res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return app.utils.error.send(errors, req, res);
        }else{
            return true
        }
    }

}
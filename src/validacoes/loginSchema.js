const joi = require('joi');

const loginSchema = joi.object({
    email: joi.string().email().required().messages({
        'string.email': 'O campo email precisa ter um formato válido.',
        'any.required': 'O campo email é obrigatório.',
        'string.empty': 'O campo email é obrigatório.'
    }),
    senha: joi.string().min(5).required().messages({
        'any.required': 'O campo senha é obrigatório',
        'string.empty': 'O campo senha é obrigatório',
        'string.min': 'A senha deve ter pelo menos {#limit} caracteres'
    })
});


module.exports = loginSchema;

const joi = require('joi');

const tarefaSchema = joi.object({
    titulo: joi.string().required().max(200).messages({
        'string.base': 'O campo titulo deve ser string.',
        'any.required': 'O campo titulo é obrigatório.',
        'string.empty': 'O campo titulo é obrigatório.',
        'string.max': 'O campo título deve ter no máximo {#limit} caracteres.'
    }),
    descricao: joi.string().optional().messages({
        'string.base': 'O campo descricao deve ser string.'
    }),
    prioridade: joi.string().valid('baixa', 'média', 'alta').required().messages({
        'string.base': 'O campo prioridade deve ser string.',
        'any.required': 'O campo prioridade é obrigatório.',
        'any.only': 'O campo prioridade deve ser "baixa", "média" ou "alta".',
        'string.empty': 'O campo prioridade é obrigatório.',
    }),
    concluida: joi.boolean().required().messages({
        'boolean.base': 'O campo concluida deve ser um valor booleano.',
        'any.required': 'O campo concluida é obrigatório.'
    }),
    prazo_conclusao: joi.date().min('now').required().messages({
        'date.base': 'O campo prazo_conclusao deve ser uma data válida.',
        'date.min': 'O campo prazo_conclusao não pode ser anterior à data atual.',
        'any.required': 'O campo prazo_conclusao é obrigatório.'
    })
});


module.exports = tarefaSchema;

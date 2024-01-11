const jwt = require('jsonwebtoken');
const knex = require('../conexoes/conexao');

const senhaJwt = process.env.SENHA_JWT;


const filtroLogin = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({
            mensagem: 'Não autorizado.'
        })
    }

    const token = authorization.replace('Bearer', '').trim();

    if (!token) {
        return res.status(401).json({
            mensagem: 'Não autorizado.'
        })
    }

    try {
        const { id } = jwt.verify(token, senhaJwt);

        const usuarioExiste = await knex('usuarios').where({ id }).first();

        if (!usuarioExiste) {
            return res.status(404).json({
                mensagem: 'Usuário não encontrado.'
            });
        }

        const { senha, ...usuario } = usuarioExiste;

        req.usuario = usuario;

        next();

    } catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
            return res.status(401).json({
                mensagem: 'Não autorizado.'
            })
        }
        return res.status(500).json({
            mensagem: 'Erro interno do servidor.'
        });
    }
}


module.exports = { filtroLogin };
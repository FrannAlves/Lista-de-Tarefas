const express = require('express');

const { cadastrarUsuario } = require('./controladores/usuarios');
const validarRequisicao = require('./intermediarios/validarRequisicao');
const usuarioSchema = require('./validacoes/usuarioSchema');


const rotas = express();


rotas.post('/usuario', validarRequisicao(usuarioSchema), cadastrarUsuario);



module.exports = rotas;
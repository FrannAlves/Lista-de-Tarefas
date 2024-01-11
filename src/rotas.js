const express = require('express');

const { cadastrarUsuario } = require('./controladores/usuarios');
const { login } = require('./controladores/autenticacao');
const validarRequisicao = require('./intermediarios/validarRequisicao');
const { filtroLogin } = require('./intermediarios/filtroLogin');
const usuarioSchema = require('./validacoes/usuarioSchema');
const loginSchema = require('./validacoes/loginSchema');



const rotas = express();


rotas.post('/usuario', validarRequisicao(usuarioSchema), cadastrarUsuario);
rotas.post('/login', validarRequisicao(loginSchema), login);

rotas.use(filtroLogin);


module.exports = rotas
const express = require('express');

const { cadastrarUsuario } = require('./controladores/usuarios');
const { login } = require('./controladores/autenticacao');
const { cadastrarTarefa } = require('./controladores/tarefas');
const validarRequisicao = require('./intermediarios/validarRequisicao');
const { filtroLogin } = require('./intermediarios/filtroLogin');
const usuarioSchema = require('./validacoes/usuarioSchema');
const loginSchema = require('./validacoes/loginSchema');
const tarefaSchema = require('./validacoes/tarefaSchema');



const rotas = express();


rotas.post('/usuario', validarRequisicao(usuarioSchema), cadastrarUsuario);
rotas.post('/login', validarRequisicao(loginSchema), login);

rotas.use(filtroLogin);

rotas.post('/tarefa', validarRequisicao(tarefaSchema), cadastrarTarefa);


module.exports = rotas;
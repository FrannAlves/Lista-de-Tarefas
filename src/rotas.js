const express = require('express');

const { cadastrarUsuario } = require('./controladores/usuarios');
const { login } = require('./controladores/autenticacao');
const { cadastrarTarefa, listarTarefas, DetalharTarefa, editarTarefa, excluirTarefa } = require('./controladores/tarefas');
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
rotas.get('/tarefa', listarTarefas);
rotas.get('/tarefa/:id', DetalharTarefa);
rotas.put('/tarefa/:id', validarRequisicao(tarefaSchema), editarTarefa);
rotas.delete('/tarefa/:id', excluirTarefa);


module.exports = rotas;
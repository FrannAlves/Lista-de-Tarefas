// Importing the 'express' module
const express = require('express');

// Importing user-related controllers
const { cadastrarUsuario } = require('./controladores/usuarios');
// Importing authentication controller
const { login } = require('./controladores/autenticacao');
// Importing task-related controllers
const { 
  cadastrarTarefa,
  listarTarefas,
  DetalharTarefa,
  editarTarefa,
  excluirTarefa
} = require('./controladores/tarefas');
// Importing middleware for request validation
const validarRequisicao = require('./intermediarios/validarRequisicao');
// Importing middleware for login filter
const { filtroLogin } = require('./intermediarios/filtroLogin');
// Importing validation schemas for user, login, and task
const usuarioSchema = require('./validacoes/usuarioSchema');
const loginSchema = require('./validacoes/loginSchema');
const tarefaSchema = require('./validacoes/tarefaSchema');

// Creating an instance of the Express application
const rotas = express();

// Endpoint for user registration with request validation
rotas.post('/usuario', validarRequisicao(usuarioSchema), cadastrarUsuario);

// Endpoint for user login with request validation
rotas.post('/login', validarRequisicao(loginSchema), login);

// Applying the login filter middleware for the following routes
rotas.use(filtroLogin);

// Endpoint for task registration with request validation
rotas.post('/tarefa', validarRequisicao(tarefaSchema), cadastrarTarefa);
// Endpoint for listing tasks
rotas.get('/tarefa', listarTarefas);
// Endpoint for getting details of a specific task
rotas.get('/tarefa/:id', DetalharTarefa);
// Endpoint for editing a task with request validation
rotas.put('/tarefa/:id', validarRequisicao(tarefaSchema), editarTarefa);
// Endpoint for deleting a task
rotas.delete('/tarefa/:id', excluirTarefa);

// Exporting the configured Express application
module.exports = rotas;

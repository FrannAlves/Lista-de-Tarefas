const knex = require('../conexoes/conexao');

const cadastrarTarefa = async (req, res) => {
    const { titulo, descricao, prioridade, concluida, prazo_conclusao } = req.body;

    try {
        const tarefaExiste = await knex('tarefas').where({ titulo }).first();

        if (tarefaExiste) {
            return res.status(400).json({
                mensagem: 'Já existe uma tarefa cadastrada com esse título.'
            });
        }

        const tarefa = await knex('tarefas').insert({
            titulo,
            descricao,
            prioridade,
            concluida,
            prazo_conclusao
        }).returning('*');

        return res.status(201).json(tarefa);

    } catch (error) {
        return res.status(500).json({
            mensagem: 'Erro interno do servidor.'
        });
    }
}


const listarTarefas = async (req, res) => {

    try {
        const tarefas = await knex('tarefas').orderBy('id', 'asc');

        return res.status(200).json(tarefas);

    } catch (error) {
        return res.status(500).json({
            mensagem: 'Erro interno do servidor.'
        });
    }
}


const DetalharTarefa = async (req, res) => {
    const { id } = req.params;

    try {
        const tarefaExiste = await knex('tarefas').where({ id }).first();

        if (!tarefaExiste) {
            return res.status(404).json({
                mensagem: 'Tarefa não encontrada.'
            })
        }

        return res.status(200).json(tarefaExiste);

    } catch (error) {
        return res.status(500).json({
            mensagem: 'Erro interno do servidor.'
        });
    }
}




module.exports = {
    cadastrarTarefa,
    listarTarefas,
    DetalharTarefa
};
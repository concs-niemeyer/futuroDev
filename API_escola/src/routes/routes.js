const { Router } = require('express')
const Aluno = require('../models/Aluno')
const Curso = require('../models/Curso')
const Funcionario = require('../models/Funcionario')

const routes = new Router()

// Rota de teste
routes.get('/bem_vindo', async (req, res) => {
    res.json({name: 'Bem vindo'})
})

// Cadastrar Novo Aluno
routes.post('/alunos', async (req, res) => {
    try {
        const { nome, data_nascimento, celular } = req.body;
        const aluno = await Aluno.create({ nome, data_nascimento, celular });
        res.status(201).json(aluno); // 201 para indicar criação bem-sucedida
    } catch (error) {
        console.error("Erro ao cadastrar aluno:", error);
        res.status(500).json({ error: "Erro ao cadastrar aluno." });
    }
});

// Cadastrar Novo Funcionário
routes.post('/staff', async (req, res) => {
    try {
        const { nome, data_nascimento, departamento } = req.body;
        const funcionario = await Funcionario.create({ nome, data_nascimento, departamento });
        res.status(201).json(funcionario); // 201 para indicar criação bem-sucedida
    } catch (error) {
        console.error("Erro ao cadastrar funcionário:", error);
        res.status(500).json({ error: "Erro ao cadastrar funcionário." });
    }
});

// Obter todos os alunos
routes.get('/alunos', async (req, res) => {
    try {
        const alunos = await Aluno.findAll();
        res.json(alunos);
    } catch (error) {
        console.error("Erro ao obter alunos:", error);
        res.status(500).json({ error: "Erro ao obter alunos." });
    }
});

// Obter todos os funcionários
routes.get('/staff', async (req, res) => {
    try {
        const funcionarios = await Funcionario.findAll();
        res.json(funcionarios);
    } catch (error) {
        console.error("Erro ao obter funcionários:", error);
        res.status(500).json({ error: "Erro ao obter funcionários." });
    }
});

// Cadastrar Novo Curso
routes.post('/cursos', async (req, res) => {
    try {
        const { nome, duracao_horas } = req.body;
        const curso = await Curso.create({ nome, duracao_horas });
        res.status(201).json(curso); // 201 para indicar criação bem-sucedida
    } catch (error) {
        console.error("Erro ao cadastrar curso:", error);
        res.status(500).json({ error: "Erro ao cadastrar curso." });
    }
});

// Obter todos os cursos
routes.get('/cursos', async (req, res) => {
    try {
        const cursos = await Curso.findAll();
        res.json(cursos);
    } catch (error) {
        console.error("Erro ao obter cursos:", error);
        res.status(500).json({ error: "Erro ao obter cursos." });
    }
});

// Buscar o Curso pelo nome
routes.get('/busca/:nome', async (req, res) => {
    const { nome } = req.params;
    try {
        const cursoEncontrado = await Curso.findOne({ nome: nome });
        if (!cursoEncontrado) {
            return res.status(404).json({ error: "Curso não encontrado." });
        }
        res.json(cursoEncontrado);
    } catch (error) {
        // Lida com erros de banco de dados ou outros erros de execução
        console.error("Erro ao buscar o curso:", error);
        res.status(500).json({ error: "Erro ao buscar o curso." });
    }
});

// Atualizar informações do Curso
routes.put('/cursos/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, duracao_horas } = req.body;

    // Validação dos dados recebidos no corpo da requisição
    if (!nome || !duracao_horas) {
        return res.status(400).json({ error: "Nome e duração do curso são obrigatórios." });
    }

    try {
        // Verifica se o curso existe no banco de dados
        const cursoExistente = await Curso.findByPk(id);
        if (!cursoExistente) {
            return res.status(404).json({ error: "Curso não encontrado." });
        }

        // Atualiza o curso com os novos dados
        cursoExistente.nome = nome;
        cursoExistente.duracao_horas = duracao_horas;
        
        // Salva o curso atualizado no banco de dados
        const cursoAtualizado = await cursoExistente.save();
        res.status(200).json(cursoAtualizado);
    } catch (error) {
        console.error("Erro ao atualizar curso:", error);
        res.status(500).json({ error: "Erro ao atualizar curso." });
    }
});

// Atualizar as informações dos Funcionários
routes.put('/staff/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, departamento } = req.body;

    // Validação dos dados recebidos no corpo da requisição
    if (!nome || !departamento) {
        return res.status(400).json({ error: "Nome e departamento são obrigatórios." });
    }

    try {
        // Verifica se o funcionário existe no banco de dados
        const staffExistente = await Funcionario.findByPk(id);
        if (!staffExistente) {
            return res.status(404).json({ error: "Curso não encontrado." });
        }

        // Atualiza o funcionário com os novos dados
        staffExistente.nome = nome;
        staffExistente.departamento = departamento;
        
        // Salva o curso atualizado no banco de dados
        const staffAtualizado = await staffExistente.save();
        res.status(200).json(staffAtualizado);
    } catch (error) {
        console.error("Erro ao atualizar funcionário:", error);
        res.status(500).json({ error: "Erro ao atualizar funcionário." });
    }
});

// Deletar um Curso
routes.delete('/cursos/:id', async (req, res) => {
    const { id } = req.params;

    try {
        // Verifica se o curso existe no banco de dados
        const cursoExistente = await Curso.findByPk(id);
        if (!cursoExistente) {
            return res.status(404).json({ error: "Curso não encontrado." });
        }

        // Deleta o curso do banco de dados
        await Curso.destroy( { where: {id} });
        
        // Retorna um status 204 (No Content) indicando que a operação foi bem-sucedida
        res.status(204).end();
    } catch (error) {
        console.error("Erro ao deletar curso:", error);
        res.status(500).json({ error: "Erro ao deletar curso." });
    }
});

// Deletar um Funcionário
routes.delete('/staff/:id', async (req, res) => {
    const { id } = req.params;

    try {
        // Verifica se o curso existe no banco de dados
        const staffExistente = await Funcionario.findByPk(id);
        if (!staffExistente) {
            return res.status(404).json({ error: "Funcionário não encontrado." });
        }

        // Deleta o funcionário do banco de dados
        await Funcionário.destroy( { where: {id} });
        
        // Retorna um status 204 (No Content) indicando que a operação foi bem-sucedida
        res.status(204).end();
    } catch (error) {
        console.error("Erro ao deletar funcionário:", error);
        res.status(500).json({ error: "Erro ao deletar funcionário." });
    }
});

module.exports = routes
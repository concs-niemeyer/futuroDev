const e = require("cors");
const Aluno = require("../models/Aluno")

class AlunoController {

    async listar(req, res) {
        try {
            const alunos = await Aluno.findAll();
            res.json(alunos);
        } catch (error) {
            console.error("Erro ao obter alunos:", error);
            res.status(500).json({ error: "Erro ao obter alunos." });
        }
    }
    
    async cadastrar(req, res) {
        try {
            const email = req.body.email
            const password = req.body.password
            const nome = req.body.nome
            const data_nascimento = req.body.data_nascimento
            const celular = req.body.celular

            const emailExistente = await Aluno.findOne({
                where: {
                    email: email
                }
            })

            if (emailExistente) {
                return res.status(409).json({ message: 'Já existe uma conta com esse email'})
            }

            if (!nome) {
                return res.status(400).json({ message: 'O nome é obrigatório' })
            }

            if (!data_nascimento) {
                return res.status(400).json({ message: 'A data de nascimento é obrigatória' })
            }

            if (!data_nascimento.match(/\d{4}-\d{2}-\d{2}/gm)) {
                return res.status(400).json({ message: 'A data de nascimento é não está no formato correto' })
            }

            const aluno = await Aluno.create({
                email,
                password,
                nome,
                data_nascimento,
                celular
            })

            res.status(201).json(aluno)

        } catch (error) {
            console.log(error.message)
            res.status(500).json({ error: 'Não possível cadastrar o aluno' })
        }
    }

    async listarUm (req, res) {
        try {

            const { id } = req.params
    
            const aluno = await Aluno.findByPk(id)
    
            if (!aluno) {
                return res.status(404).json({ message: "Usuário não encontrado!" })
            }
    
            res.json(aluno)
    
        } catch (error) {
            console.log(error.message)
            res.status(500).json({
                error: 'Não foi possível listar o aluno especifico',
                error: error
            })
        }
    }

}

module.exports = new AlunoController()

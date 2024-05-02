const { database } = require("../config/database.config");
const Funcionario = require("../models/Funcionario");

class StaffController {

    async cadastrar(req, res) {
        try {
            const email = req.body.email
            const password = req.body.password
            const nome = req.body.nome
            const celular = req.body.celular
            const data_nascimento = req.body.data_nascimento
            const setor = req.body.setor

            const emailExistente = await Funcionario.findOne({
                where: {
                    email: email
                }
            })

            if (emailExistente) {
                return res.status(409).json({ message: 'Já existe uma conta com esse email'})
            }
            if (!nome || !email) {
                return res.status(400).json({ message: 'O nome e o email são obrigatórios'})
            }

            if (celular.length !== 11) {
                return res.status(400).json({ message :'Insira o número do celular com DDD [11 dígitos]'})
            }

            if (!data_nascimento) {
                return res.status(400).json({ message: 'A data de nascimento é obrigatória' })
            }

            if (!data_nascimento.match(/\d{4}-\d{2}-\d{2}/gm)) {
                return res.status(400).json({ message: 'A data de nascimento é não está no formato correto' })
            }

            const funcionario = await Funcionario.create({
                email: email, 
                password: password,
                nome: nome,
                celular: celular,
                data_nascimento: data_nascimento,
                setor: setor
            });
            
            res.status(201).json(funcionario); // 201 para indicar criação bem-sucedida

        } catch (error) {
            console.error("Erro ao cadastrar funcionário:", error);
            res.status(500).json({ error: "Erro ao cadastrar funcionário." });
        }
    }

    async listar(req, res) {
        try {
            const funcionarios = await Funcionario.findAll();
            res.json(funcionarios);
        } catch (error) {
            console.error("Erro ao obter funcionários:", error);
            res.status(500).json({ error: "Erro ao obter funcionários." });
        }

    }

    async listarPeloId(req, res) {
        try {
            const { id } = req.params

            const staff = await Funcionario.findByPk(id)

            if (!staff) {
                return res.status(404).json({ message: "Usuário não encontrado!"})
            }

            res.json(staff)

        } catch (error) {
            res.status(500).json({
                error: 'Não foi possível listar o funcionário específico',
                error: error
            })
        }
    }

    async atualizar(req, res) {
        const { id } = req.params;
        const { nome, setor } = req.body;

        // Validação dos dados recebidos no corpo da requisição
        if (!nome || !setor) {
            return res.status(400).json({ error: "Nome do departamento e setor são obrigatórios." });
        }

        try {
            // Verifica se o funcionário existe no banco de dados
            const staffExistente = await Funcionario.findByPk(id);
            if (!staffExistente) {
                return res.status(404).json({ error: "Curso não encontrado." });
            }

            // Atualiza o funcionário com os novos dados
            staffExistente.nome = nome;
            staffExistente.setor = setor;
            
            // Salva o curso atualizado no banco de dados
            const staffAtualizado = await staffExistente.save();
            res.status(200).json(staffAtualizado);
        } catch (error) {
            console.error("Erro ao atualizar funcionário:", error);
            res.status(500).json({ error: "Erro ao atualizar funcionário." });
        }
    }

    async deletar(req, res) {
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
    }
}

module.exports = new StaffController()
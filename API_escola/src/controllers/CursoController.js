const Curso = require("../models/Curso");

class CursoController {
// INSERIR AS VALIDAÇÕES NO FORMATO DO ARQUIVO AlunoController.js !!!

    async listar(req, res) {
        try {
            const cursos = await Curso.findAll();
            res.json(cursos);
        } catch (error) {
            console.error("Erro ao obter cursos:", error);
            res.status(500).json({ error: "Erro ao obter cursos." });
        }
    }

    async cadastrar(req, res) {
        try {
            const { nome, duracao_horas } = req.body;
            
            if(!nome) {
                return res.status(400).json({message: "Nome do curso é obrigatório."})
            }

            if(duracao_horas == NaN || duracao_horas <= 0) {
                return res.status(400).json({message: "Informe o número da carga horária do curso."})
            }

            const curso = await Curso.create({ nome, duracao_horas });
            res.status(201).json(curso); // 201 para indicar criação bem-sucedida
        } catch (error) {
            console.error("Erro ao cadastrar curso:", error);
            res.status(500).json({ error: "Erro ao cadastrar curso." });
        }
    }

    async listarPeloNome(req, res) {
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
    }

    async atualizar(req, res) {
        const { id } = req.params;
        const { nome, duracao_horas } = req.body;
    
        // Validação dos dados recebidos no corpo da requisição
        if (!nome || !duracao_horas) {
            return res.status(400).json({ error: "Nome e duração do curso são obrigatórios." });
        }

        if(duracao_horas == NaN || duracao_horas <= 0) {
            return res.status(400).json({ message: "Insira um número válido."})
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
    }

    async deletar(req, res) {
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
    }
}

module.exports = new CursoController()

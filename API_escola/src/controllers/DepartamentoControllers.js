const Curso = require("../models/Curso")
const Departamento = require("../models/Departamento")

class DepartamentoController {

    async cadastar(req, res){
        try{
            const setor = req.body.setor
            const funcionario = req.body.funcionario
            const carga_horaria = req.body.carga_horaria

            if(!setor || !funcionario){
                return res.status(400).json({message: "O departamento e o funcionário são obrigatórios"})
            }
            
            if (carga_horaria == NaN || carga_horaria <= 0) {
                return res.status(400).json({ message: "A carga horária deve ser um número maior do que zero."})
            }

            const departamento = await Departamento.create({
                setor: setor,
                funcionario: funcionario,
                carga_horaria: carga_horaria
            })

            res.status(201).json(departamento)
        } catch (error) {
            res.status(500).json({ error: "Erro ao cadastrar departamento"})
        }

    }

    async atualizar(req, res){
        const { id } = req.params
        const { setor, funcionario, carga_horaria} = req.body

        if (!setor || ! funcionario) {
            return res.status(400).json({error : "Nome do funcionário e departamento são obrigatórios"})
        }

        if (carga_horaria == NaN || carga_horaria <= 0) {
            return res.status(400).json({error: "A carga horária precisa ser um número maior que zero."})
        }

        try {
            const departamentoExistente = await Departamento.findByPk(id)
            if (!departamentoExistente) {
                return res.status(404).json({error: "Departamento não encontrado."})
            }
            departamentoExistente.setor = setor
            departamentoExistente.funcionario = funcionario
            departamentoExistente.carga_horaria = carga_horaria

            const departamentoAtualizado = await departamentoExistente.save()
            res.status(200).json(departamentoAtualizado)
        } catch (error) {
            res.status(500).json({error: "Error ao atualizar o departamento."})
        }


    }

    async listar(req, res) {
        try{
            const departamento = await Departamento.findAll()
            res.json(departamento)
        } catch (error) {
            res.status(500).json({ error: "Erro ao obter departamento."})
        }

    }

    async listarPeloSetor(req, res){
        const {setor} = req.params
        try {
            const departamentoEncontrado = await Departamento.findOne({setor: setor})
            if (!departamentoEncontrado) {
                return res.status(404).json({ error: "Departamento não encontrado."})
            }
            res.json(departamentoEncontrado)
        } catch (error) {
            res.status(500).json({error: "Erro ao buscar o departamento pelo nome."})
        }

    }
    
    async deletar(req, res) {
        const { id } = req.params

        try {

            const departamentoExistente = await Departamento.findByPk(id)

            if(!departamentoExistente) {
                return res.status(404).json({error: "O departamento não existe"})
            }

            await Departamento.destroy( { where: {id}})
            res.status(204).end()
        } catch(error) {
            res.status(500).json({error: "Erro ao deletaro departamento."})
        }
    }
}

module.exports = new DepartamentoController()
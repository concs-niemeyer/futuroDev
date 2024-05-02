const { compare } = require("bcryptjs")
const { sign } = require("jsonwebtoken")
const Aluno = require("../models/Aluno")

class LoginController {
    async login(req,res) {
        try {
            const email = req.body.email
            const password = req.body.password

            if (!email) {
                return res.status(400).json({ error: "O email é obrigatório"})
            }

            if (!password) {
                return res.status(400).json({error: "O password é obrigatório"})
            }

            const aluno = await Aluno.findOne({ where: {email:email, password:password}
            })

            if (!aluno) {
                return res.status(404).json({error: "Nenhum aluno corresponde a email e senha fornecido."})
            }

            const hashSenha = await compare(password, aluno.password)

            if(hashSenha === false) {
                return res.status(400).json({mensagem: 'Não encontrado essa conta'})
            }
            const payload = {sub: aluno.id, email: aluno.email, nome: aluno.nome}

            const token = sign(payload, process.env.SECRET_JWT)

            res.status(200).json({Token: token})

        } catch (error) {
            return res.status(500).json({error: error, messagem: "Algo deu errado!"})
        }
    }
}

module.exports = new LoginController()
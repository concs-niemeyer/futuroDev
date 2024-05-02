const { DataTypes } = require("sequelize");
const { connection } = require("../database/connection");
const { hash } = require("bcryptjs");



const Funcionario = connection.define('funcionarios', {
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.STRING
    },
    nome: {
        type: DataTypes.STRING
    },
    celular: {
        type: DataTypes.STRING,
        unique: true
    },
    data_nascimento: {
        type: DataTypes.DATE
    },
    setor: {
        type: DataTypes.STRING
    }
}
)
// hooks 
Funcionario.beforeSave(async (user) => {
    user.password = await hash(user.password, 8)
    return user
})

module.exports = Funcionario
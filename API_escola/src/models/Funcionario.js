const { DataTypes } = require("sequelize");
const { connection } = require("../database/connection");

const Funcionario = connection.define('funcionarios', {
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    nome: {
        type: DataTypes.STRING
    },
    celular: {
        type: DataTypes.STRING
    },
    data_nascimento: {
        type: DataTypes.DATE
    },
    departamento: {
        type: DataTypes.STRING
    }
})

module.exports = Funcionario
const { DataTypes } = require("sequelize");
const { connection } = require("../database/connection");

const Funcionario = connection.define('funcionarios', {
    nome: {
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
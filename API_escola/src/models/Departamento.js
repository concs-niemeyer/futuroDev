const { DataTypes } = require("sequelize");
const { connection } = require("../database/connection");

const Departamento = connection.define('departamentos', {
    setor: {
        type: DataTypes.STRING
    },
    funcionario: {
        type: DataTypes.STRING
    },
    carga_horaria: {
        type: DataTypes.INTEGER
    }

})

module.exports = Departamento
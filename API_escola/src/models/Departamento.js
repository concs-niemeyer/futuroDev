const { DataTypes } = require("sequelize");
const { connection } = require("../database/connection");


const Departamento = connection.define('departamentos', {
    setor: {
        type: DataTypes.STRING
    },
    funcionario_id: {
        type: DataTypes.INTEGER,
        unique: true
    },
    carga_horaria: {
        type: DataTypes.INTEGER
    }

})


module.exports = Departamento 
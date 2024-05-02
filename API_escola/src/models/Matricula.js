const { connection } = require("../database/connection");
const { DataTypes } = require('sequelize');
const Aluno = require("./Aluno");
const Curso = require('./Curso')

const Matricula = connection.define("matriculas", {
    aluno_id: {
        type: DataTypes.INTEGER,
        references: {
            // This is a reference to another model
            model: Aluno,
            // This is the column name of the referenced model
            key: 'id'
        },
    },
    curso_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Curso,
            key: 'id'
        },
    }
})
/*
Team.hasMany(Player, {
    foreignKey: 'clubId',
  });
  Player.belongsTo(Team);
*/
Aluno.hasMany(Matricula, {
    foreignKey: 'aluno_id'
  });
Matricula.belongsTo(Aluno);

Curso.hasMany(Matricula, {
    foreignKey: 'curso_id'
})
Matricula.belongsTo(Curso)


module.exports = Matricula
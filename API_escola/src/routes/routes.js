const { Router } = require('express')
const alunoRoutes = require("./alunos.route");
const cursoRoutes = require("./cursos.route");
const loginRoutes = require("./login.route");
const staffRoutes = require('./staff.route');
const departamentoRoutes = require('./departamento.route');
const matriculaRoutes = require('./matricula.route');

const routes = new Router()

routes.use('/staff', staffRoutes)
routes.use('/alunos', alunoRoutes)
routes.use('/cursos', cursoRoutes)
routes.use('/login', loginRoutes)
routes.use('/matricula', matriculaRoutes)
routes.use('/departamentos', departamentoRoutes)

module.exports = routes
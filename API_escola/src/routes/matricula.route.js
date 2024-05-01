const { Router } = require("express");
const MatriculaControllers = require("../controllers/MatriculaControllers");
const { auth } = require("../middleware/auth");



const matriculaRoutes = new Router()

matriculaRoutes.post('/', auth, MatriculaControllers.cadastrar)

module.exports = matriculaRoutes
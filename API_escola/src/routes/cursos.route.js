const { Router } = require("express");
const CursoController = require("../controllers/CursoController");
const { auth } = require("../middleware/auth");

const cursoRoutes = new Router()

cursoRoutes.post('/', CursoController.cadastrar)
cursoRoutes.get('/', auth, CursoController.listar)
cursoRoutes.get('/:nome', auth, CursoController.listarPeloNome)
cursoRoutes.put('/:id', auth, CursoController.atualizar)
cursoRoutes.delete('/:id', auth, CursoController.deletar)

module.exports = cursoRoutes
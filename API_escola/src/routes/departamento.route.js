const { Router } = require("express");
const { auth } = require("../middleware/auth");
const DepartamentoControllers = require("../controllers/DepartamentoControllers");


const departamentoRoutes = new Router()

departamentoRoutes.post('/', auth, DepartamentoControllers.cadastar)
departamentoRoutes.get('/', auth,  DepartamentoControllers.listar)
departamentoRoutes.get('/:departamento', auth, DepartamentoControllers.listarPeloSetor )
departamentoRoutes.put('/:id', auth, DepartamentoControllers.atualizar)
departamentoRoutes.delete('/:id', auth, DepartamentoControllers.deletar)

module.exports = departamentoRoutes
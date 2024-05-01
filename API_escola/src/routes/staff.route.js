const { Router } = require("express");
const StaffController = require("../controllers/StaffController");
const { auth } = require("../middleware/auth");

const staffRoutes = new Router()

staffRoutes.post('/', StaffController.cadastrar)
staffRoutes.get('/', auth, StaffController.listar)
staffRoutes.get('/:id', auth, StaffController.listarPeloId)
staffRoutes.put('/:id', auth, StaffController.atualizar)
staffRoutes.delete('/:id', auth, StaffController.deletar)

module.exports = staffRoutes
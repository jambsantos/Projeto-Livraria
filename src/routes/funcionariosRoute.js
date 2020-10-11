const express = require("express");
const router = express.Router();
const controllerF = require("../controller/funcionariosController");


router.get("/funcionarios", controllerF.getAllWorkers);
router.post("/", controllerF.postWorkers);
router.delete('/funcionarios/:id', controllerF.deleteWorkers);
router.get('/funcionarios/idade', controllerF.getByAge);

module.exports = router

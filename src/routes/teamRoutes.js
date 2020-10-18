const express = require('express');
const router = express.Router();
const controller = require('../controllers/teamController');

router.get("/",controller.getAll);
router.get("/team",controller.getAll);
router.get("/:id",controller.getById);
router.get("/age/:id",controller.getAgeById);
router.post("/",controller.postTeam);
router.delete("/:id",controller.deleteTeam);

module.exports = router;

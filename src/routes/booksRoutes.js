const express = require('express');
const router = express.Router();
const controller = require('../controllers/booksController');

router.get("/",controller.getAll);
router.get("/books",controller.getAll);
router.get("/:id",controller.getById);
router.get("/categoria/:categoria",controller.getByCategoria);
router.post("/",controller.postBooks);
router.delete("/:id",controller.deleteBooks);

module.exports = router;


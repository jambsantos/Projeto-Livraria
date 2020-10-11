const express = require("express");
const router = express.Router();
const controller = require("../controller/livrosController");


router.get("/nome", controller.getAllBooks);
router.post("/livros", controller.postBooks);
router.delete('/:id', controller.deleteBooks);
//router.get('/:autor', controller.getByAuthor);

module.exports = router

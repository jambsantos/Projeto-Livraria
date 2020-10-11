const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.status(200).send({
    title: "Livraria Readcife - A maior livraria em linha reta da América Latina",
    version: "1.0"
  })
})

module.exports = router
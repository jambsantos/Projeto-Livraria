const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send({
    title: "Livraria Readcife - A maior livraria em linha reta da América Latina",
    version: 2.0,
    date:"17/10/2020"
  })
})

module.exports = router

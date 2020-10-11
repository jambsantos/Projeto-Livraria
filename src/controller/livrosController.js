const livros = require('../models/livros.json');
const fs = require("fs");

const getAllBooks = (req, res) => {
      console.log(req.url);
      res.status(200).send(livros);
  };

const postBooks = (req, res) => {
    console.log(req.body);
    const { id, nome, autor, categoria, quantidade, formatoDigital } = req.body;
    livros.push({ id, nome, autor, categoria, quantidade, formatoDigital });
    fs.writeFile("./src/models/livros.json", JSON.stringify(livros), "utf8", function(err) {
      if (err) {
        return res.status(424).send({ message:err });
      }
      console.log("Livro atualizado com sucesso!");
    });
    res.status(201).send(livros); // Erro 201 para uso do POST
};

const deleteBooks = (req, res) => {
  const id = req.params.id;
  const livroFiltrado = livros.find((livros) => livros.id == id);
  const index = livros.indexOf(livroFiltrado);
  livros.splice(index, 1);

  fs.writeFile("./src/models/livros.json", JSON.stringify(livros), "utf8", function(err) {
    if (err) {
     return res.status(424).send({ message:err });}
   console.log("Livro excluido e arquivo atualizado!");
  });
   res.status(200).send(livros);
 };
// const getByAuthor = (req, res) => {
//   const autor = req.params.autor;
//   res.status(200).send(livros.filter((livros) => livros.autor.toUpperCase() == autor.toUpperCase()));
// };


module.exports = {
getAllBooks,
postBooks,
deleteBooks,
//getByAuthor
}
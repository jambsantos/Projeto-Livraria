const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//rotas
const index = require('./routes/index');
const books = require('./routes/booksRoutes');
const team = require('./routes/teamRoutes');


//configurar bodyParser
app.use(bodyParser.json());

app.use((req,res,next)=> {
    res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
    console.log("Nova requisição realizada");
    next()
});

app.use('/', index);
app.use('/books',books);
app.use('/team',team);

module.exports = app;

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database.js");
const Pergunta = require("./database/Pergunta");
const Resposta = require("./database/Resposta");

// Database
connection
  .authenticate()
  .then(() => {
    console.log("Autenticação concluida!");
  })
  .catch((err) => {
    console.log(err);
  });

// Ejs config
app.set('view engine', 'ejs');
app.use(express.static('public'));

//Body Parser config
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
  Pergunta.findAll({raw: true, order: [
    ['id', 'DESC']
  ]}).then((perguntas) => {
    res.render("index", {
      perguntas: perguntas
    });
  })
});

app.get("/perguntar", (req, res) => {
  res.render("Perguntar");
});

app.post("/savequestion", (req, res) => {

  var titulo = req.body.titulo;
  var descricao = req.body.descricao;

  // INSERT INTO Pergunta ...
  Pergunta.create({
    titulo: titulo,
    descricao: descricao
  }).then(() => {
    res.redirect("/");
  })
});

app.get("/perguntar/:id", (req, res) => {
  var id = req.params.id;

  Pergunta.findOne({
    where: {id: id}
  }).then(pergunta => {
    if(pergunta != undefined) {
      Resposta.findAll({
        where: {perguntaID: pergunta.id},
        order: [['id', 'DESC']]
      }).then(resposta => {
        res.render("pergunta", {
          perguntas: pergunta,
          respostas: resposta
        });
      });
    } else {
      res.redirect("/");
    }
  });
})

app.post("/responder", (req, res) => {
  
  var perguntaID = req.body.pergunta;
  var corpo = req.body.corpo;

  Resposta.create({
    perguntaID: perguntaID,
    corpo: corpo
  }). then(() => {
    res.redirect(`/perguntar/${perguntaID}`);
  });
})

app.listen(8080, () => {
  console.log("Servidor rodando!");
});


const express = require("express");
const app = express();

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.render("index", {
    nome: "Italo Médici",
    idade: 17,
    sobrenome: "Silva"
  });
});

app.listen(8080, () => {
  console.log("Servidor rodando!");
});


const { render } = require("ejs");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Pergunta = require("./database/Pergunta");
const Resposta = require("./database/Resposta");

// Database
connection
  .authenticate()
  .then(() => {
    console.log("Conexão feita com o banco de dados");
  })
  .catch((msgErro) => {
    console.log(msgErro);
  });

// host
const host = "192.168.0.11";
const PORT = process.env.PORT || 3000;
// Chamando o EJS
app.set("view engine", "ejs");

// Configurando para arquivos estáticos
app.use(express.static("public"));

// Configurando o bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Home page com ejs
app.get("/", (req, res) => {
  //   Procura dados na tabela --> SELECT * FROM
  Pergunta.findAll({ raw: true, order: [["id", "DESC"]] }).then((perguntas) => {
    res.render("index", {
      perguntas: perguntas,
    });
  });
});

// Rota perguntar
app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});

// Recebendo dados do formulario --> perguntar.ejs
app.post("/salvarpergunta", (req, res) => {
  var titulo = req.body.titulo;
  var descricao = req.body.descricao;
  //   Salvando no banco de dados e faz um INSERT na tabela Pergunta passando os dados do formulário
  Pergunta.create({
    titulo: titulo,
    descricao: descricao,
    // Se tiver tudo certo vai encaminhar para a Home pag.
  }).then(() => {
    res.redirect("/");
  });
});

app.get("/pergunta/:id", (req, res) => {
  var id = req.params.id;
  Pergunta.findOne({
    where: { id: id }, // banco de dados : variável
  }).then((pergunta) => {
    if (pergunta != undefined) {
      Resposta.findAll({
        where: { perguntaId: pergunta.id },
        order: [["id", "DESC"]],
      }).then((respostas) => {
        res.render("pergunta", {
          pergunta: pergunta,
          respostas: respostas,
        });
      });
    } else {
      // Não encontrada
      res.redirect("/");
    }
  });
});

app.post("/responder", (req, res) => {
  var corpo = req.body.corpo;
  var perguntaId = req.body.pergunta;

  Resposta.create({
    corpo: corpo,
    perguntaId: perguntaId,
  }).then(() => {
    res.redirect(`/pergunta/${perguntaId}`);
  });
});

// Servidor on
app.listen(PORT, host, () => {
  console.log("App rodando!");
});

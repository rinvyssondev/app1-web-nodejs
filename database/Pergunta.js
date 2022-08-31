const Sequelize = require("sequelize");
const connection = require("./database");

// Tabela do banco
const Pergunta = connection.define("perguntas", {
  titulo: {
    type: Sequelize.STRING, //texto curto
    allowNull: false,
  },
  descricao: {
    type: Sequelize.TEXT, //texto longo
    allowNull: false,
  },
});

// Sincronizando com o banco
Pergunta.sync({ force: false }).then(() => {});

module.exports = Pergunta;

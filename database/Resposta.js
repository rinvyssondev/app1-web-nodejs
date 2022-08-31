const Sequelize = require("sequelize");
const connection = require("./database");

// Criando tabela no banco --> Relacionamento entre tabelas/simplificada
const Resposta = connection.define("respostas", {
  corpo: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  perguntaId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

// Sincronizando com o banco de dados
Resposta.sync({ force: false });

// exportando a resposta
module.exports = Resposta;

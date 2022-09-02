const Sequelize = require("sequelize");
const senha = 123456;

// Conectando com o banco de dados | nome | usuario | senha
const connection = new Sequelize("guiaperguntas", "root", senha, {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection;

const Sequelize = require("sequelize");

// Conectando com o banco de dados | nome | usuario | senha
const connection = new Sequelize("guiaperguntas", "root", "4525658545", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection;

const Sequelize = require("sequelize");

// Autenticação
const NomedaTabela = "digite o nome da tabela";
const login = "digite o login do db";
const senha = "digite a senha";

// Conectando com o banco de dados | nome | usuario | senha
const connection = new Sequelize(NomedaTabela, login, senha, {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection;

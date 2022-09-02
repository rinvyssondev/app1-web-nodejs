const Sequelize = require("sequelize");

// Autenticação
const NomedaTabela = "digite o nome da tabela";
const login = "digite o login do banco de dados";
const senha = "digite a senha do usuário do banco de dados";

// Conectando com o banco de dados | nome | usuario | senha
const connection = new Sequelize(NomedaTabela, login, senha, {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection;

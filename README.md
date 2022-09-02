<h1> Aplicação web </h1>
<br>
<h2> Projeto desenvolvido para a pratica de aplicações web utilizando a ferramenta NodeJS.</h2>
<br>

- O projeto consta em desenvolver um conteúdo que abrange perguntas e respostas. Nas quais utiliza-se alguns conceitos básicos de NodeJS como comunicação com o banco de dados, front-end e práticas com o bootstrap. Para rodar a aplicação precisa do Banco de dados instalado/conectado (MySQL) e do NodeJS.
  <br>
- Passos:
  <br>

  *Execute o comando **npm install** na pasta que você criou para colocar os arquivos, isso irá baixar as depedências solicitadas para rodar à aplicação. <br>
  *Crie uma tabela no Banco de dados (MySQL) e preencha as variáveis que está em **/database/database.js**.
  <br>
  \*Depois disso é só digitar **node index.js**, porém qualquer alteração feita terá que restartar o servidor usando o mesmo comando; ou <br>
  *Pode rodar também utilizando o comando **nodemon index.js**, com isso, qualquer mudança feita na aplicação o comando irá fazer um restart no servidor automaticamente; ou <br>
  *Poderá deixar a aplicação rodando em _background_ utilizando o comando **pm2 start index.js**, porém irá consumir 100% da cpu do seu computador. <br>

  **<h2> Tecnologias Utilizadas: </h2>**
  <br>

- Versão do NodeJS:
  <br>
  Node: v16.15.1
  <br>
- Banco de dados:
  <br>
  Mysql 8.0.30
  <br>
- Lista de dependências:
  <br>
  body-parser: ^1.20.0", <br>
  ejs: ^3.1.8, <br>
  express: ^4.18.1, <br>
  mysql2: ^2.3.3, <br>
  sequelize: ^6.21.4 <br>
  pm2: ^5.2.0

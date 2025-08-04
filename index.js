//configurando o dotenv para deixar os arquivos de seguranca do banco de dados seguro(poder usar os dados do .env)
const dotenv = require("dotenv");

//chamando a funcao de conexao do banco de dados
const ConnecToDatabase = require("./src/database/connect.js");
dotenv.config();

//fazendo a conexao
ConnecToDatabase();

//importando o express para requisicoes http
require("./modules/express.js");


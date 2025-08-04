//ARQUIVO DE CONECAO COM O BANCO DE DADOS MONGO DB
const mongoose = require("mongoose");

//usando o mongoose para fazer conexao com o banco de dados, tem q usar o try na nova versao do mongoose

const ConnecToDatabase = async () => {
  //connect -> parametros(conexao)
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@bdcabelereiro.uq2mxeq.mongodb.net/?retryWrites=true&w=majority&appName=BdCabelereiro`
    );
    console.log("Conexao realizada com sucesso");
  } catch (error) {
    console.log(`Erro na conexao: ${error}`);
  }
};

module.exports = ConnecToDatabase;

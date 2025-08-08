//Esse arquivo como se fosse as querys de um banco de dados mais em APIREST

const express = require("express");

//pegar o esquema do usuario para poder criar os registros

const UserModel = require("../src/models/user.model");
const app = express();

//sinalizar que o express vai receber um JSON
app.use(express.json());

//isso midle ele acontece antes de iniciar uma requisicao (middleware)
app.use((req, res, next) => {
  console.log(`Tipo da requisicao: ${req.method}`);
  console.log(`tipo do conteudo da requisicao: ${req.header["content-type"]}`);
  console.log(`horario da requisicao: ${new Date()}`);
});

app.get("/home", (req, res) => {
  res.contentType(".html");
  res.status(200).send("<h1> home page!! </h1>");
});

//pegar todos os usuarios
app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//fazer um endpoint que vai pegar o user no banco pelo ID
app.get("/users/:id", async (req, res) => {
  try {
    //sempre depois de params tem que ser a mesma coisa depois dos /:
    const id = req.params.id;

    const user = await UserModel.findById(id);

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//requisicao para alterar somente um dado de um usuario (path faz isso)
app.patch("/users/:id", async (req, res) => {
  try {
    //pegando o id
    const id = req.params.id;

    //pegar o que json que eu escrever no body do PosrMan
    const objModifY = req.body;

    //new true para atualizacao retornar -> entao ele atualiza mais nao mostra a versao atualizada
    const user = await UserModel.findByIdAndUpdate(id, objModifY, {
      new: true,
    });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//Deletar um usuario pelo ID
app.delete("/users/:id", async (req, res) => {
  try {
    //pegando o id
    const id = req.params.id;
    const user = await UserModel.findByIdAndDelete(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const port = 8080;
app.listen(port, () => console.log(`rodando com express na porta:  ${port}`));

//usar os "USERS" como endpoint(final da url) para criacao de um usuario, o post para CRIAR USUARIO
app.post("/users", async (req, res) => {
  try {
    //Esta usando um json que esta pegando no  body do postman
    const user = await UserModel.create(req.body);

    //aqui se o arquivo for mandado com sucesso para o banco
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const express = require("express");

//pegar o esquema do usuario para poder criar os registros
const USerModel = require("../src/models/user.model");
const UserModel = require("../src/models/user.model");


const app = express();

app.get("/home", (req, res) => {
  res.contentType(".html");
  res.status(200).send("<h1> home page!! </h1>");
});

//fazendo o papel de um banco de dados
app.get("/users", (req, res) => {
  const users = [
    {
      name: "jhon doe",
      email: "jhon@gmail.com",
    },
    {
      name: "isa",
      email: "isa@isa.com",
    },
  ];

  res.status(200).json(users);
});

const port = 8080;

app.listen(port, () => console.log(`rodando com express na porta:  ${port}`));

//usar os "USERS" como endpoint(final da url) para criacao de um usuario, o post para criar usuario
app.post("/users", (req, res) => {
  const user = UserModel.create(req.body)

  res.status(201).json(user)
});

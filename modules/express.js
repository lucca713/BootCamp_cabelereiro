const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  res.contentType(".html");
  res.status(200).send("<h1> home page!! </h1>");
});

app.get("/user", (req, res) => {
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

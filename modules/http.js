const http = require("http");

const port = 3001;

const server = http.createServer((req, res) => {
    //indica para qual diretorio esta indo, tipo a view do django
  if (req.url == "/home") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("<h1> home page </h1>");
  }

  //para mandar varios user precisa de um json
  if (req.url == "/user") {
    const users  = [{
        name:'jhon doe',
        email: 'jhon@gmail.com'
    },
    {
        name: "isa",
        email: "isa@isa.com"
    }]

    //indica o codigo se deu tudo certo o tipo do arquivo ques esta indo
    res.writeHead(200, {"content-type": "application/json"})

    res.end(JSON.stringify(users)) //transormar o json em string pois sempre tem que ir em string no response 

  }
});

server.listen(port, () => console.log(`Rodando na porta: ${port}`));

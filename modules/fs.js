/*
const fs = require("fs");

const path = require("path");

//cria uma pasta -> funcao async ja
fs.mkdir(path.join(__dirname, "/test"), (error) => {
  if (error) {
    return console.log("Erro: ", error);
  }
  console.log("pasta criado com sucesso");
});

//criar um arquivo -> 3 parametros
fs.writeFile(path.join(__dirname, "/test", "test.html"), 'hello node' ,(error) => {
  if (error) {
    return console.log("Erro: ", error);
  }
  console.log("arquivo de teste gerado com sucesso");
});

fs.appendFile(path.join(__dirname, "/test", "test.html"), 'hello world!' ,(error)=>{
    if(error){
        return console.log("Erro: ", error)
    }
    console.log("arquivo adicionado com sucesso")
})

*/
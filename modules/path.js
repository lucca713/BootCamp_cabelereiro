const path = require("path");

//Apenas o nome do arquivo atual
console.log(path.basename(__filename));

//Nome do diretorio atual
console.log(path.dirname(__filename))

//Nome da extensao do arquivo
console.log(path.extname(__filename))

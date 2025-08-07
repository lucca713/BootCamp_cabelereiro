//Esse arquivo vai conter o esqueleto da aplicacao, estrutura de dados

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },

  lastName: {
    type: String,
    require: true,
  },

  email: {
    type: String,
    require: true,
  },

  password: {
    type: String,
    require: true,
    minlength: 7,
  },
});

//primeiro parametro é o nome do model (nesse caso User) e o outro o schema que esse User vai se referir
const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;

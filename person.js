//objeto
class Person {
  constructor(name) {
    this.name = name;
  }

  sayMyname() {
    return `meu nome eh ${this.name}`;
  }
}

//exportar uma classe
module.exports = {
  Person,
};

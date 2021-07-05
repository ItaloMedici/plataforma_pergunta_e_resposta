const sequelize = require("sequelize");
const connection = require("./database");

const Reposta = connection.define("resposta", {
  corpo: {
    type: sequelize.TEXT,
    allowNull: false
  },
  perguntaID: {
    type: sequelize.INTEGER,
    allowNull: false
  }
});

Reposta.sync({force: false});

module.exports = Reposta;
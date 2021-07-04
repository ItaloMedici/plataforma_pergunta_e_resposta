const { Sequelize } = require('sequelize');
const sequelize = require('sequelize');

const schema = "askUs";
const user = "root";
const password = "1234";

const connection = new Sequelize(schema, user, password, {
  host: "localhost",
  dialect: "mysql"
});

module.exports = connection;
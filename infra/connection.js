const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "123Admin123",
  database: "schedule_pet",
});

module.exports = conn;

const mysql = require("mysql");
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ssb',
  multipleStatements: true
});



module.exports = connection;

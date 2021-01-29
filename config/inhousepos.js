const mysql = require("mysql");
const inhouseConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'inhouseLocal'
  });
  


module.exports = inhouseConnection;

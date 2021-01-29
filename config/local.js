const mysql = require("mysql");
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'virtual_order'
});



module.exports = connection;

const mysql = require("mysql");
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'anbyaarmyali',
  password: 'CMMDHwB9RDjdyxVW',
  database: 'central_kitchen',
  multipleStatements: true
});



module.exports = connection;

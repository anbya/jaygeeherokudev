const mysql = require("mysql");
const connection = mysql.createConnection({
  host: '158.140.177.79',
  user: 'master_user',
  password: 'Qaz@741',
  database: 'opname'
});

// const connection = mysql.createConnection({
//   host: 'dci09.dewaweb.com',
//   user: 'nahmthai_opnameuser',
//   password: 'YlgA3cWBMKq!',
//   database: 'nahmthai_opname'
// });

module.exports = connection;

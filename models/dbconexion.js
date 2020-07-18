var mysql = require('mysql');
var conn = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"todoitems"
});
conn.connect();
module.exports = conn;

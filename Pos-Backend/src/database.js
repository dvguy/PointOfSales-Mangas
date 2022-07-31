const mysql = require('mysql');
require("dotenv").config();

const connection = mysql.createConnection({
    database: process.env.DATABASE,
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD
});

console.log(`EL DATABASE ES:${process.env.HOST}`)

console.log(`EL USUARIO ES:${process.env.USER}`)


connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;

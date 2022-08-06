const mysql = require('mysql');

if(process.env.NODE_ENV != "production"){
  require("dotenv").config();
}



const connection = mysql.createPool({
  database: process.env.DATABASE,
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD
});



// const connection = mysql.createConnection({
//     database: process.env.DATABASE,
//     host: process.env.HOST,
//     user: process.env.USER,
//     password: process.env.PASSWORD
// });

console.log(`EL HOST ES:${process.env.HOST}`)
console.log(`VERIFICAR ENTORNO ${process.env.NODE_ENV}`)
console.log(`EL USUARIO ES:${process.env.USER}`)
console.log(`EL DATABASE ES:${process.env.DATABASE}`)


connection.getConnection(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;



const mysql = require('mysql');

const connection = mysql.createConnection({
    database: 'mangas',
    host: 'localhost',
    user: 'root',
    password: ''
});


connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;

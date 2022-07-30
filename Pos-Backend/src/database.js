const mysql = require('mysql');

const connection = mysql.createConnection({
    database: DB_PORT,
    host: 'us-cdbr-east-06.cleardb.net',
    user: 'b97f0322c56c75',
    password: '48ed2a19'
});


connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;

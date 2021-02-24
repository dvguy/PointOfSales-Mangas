const mysql = require('mysql');

const conexion = mysql.createConnection({
        database: 'mangas',
        host: 'localhost',
        user: 'root',
        password: ''
    });

conexion.connect(function(err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('database connected');
    }
});

module.exports = conexion;

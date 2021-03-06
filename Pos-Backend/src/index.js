const express = require('express');
const app = express();
const port = process.env.port || 1000;

app.use(express.static(__dirname + '/'));

app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
    	res.header('Access-Control-Allow-Methods', 'POST, PUT, DELETE, GET, PATCH');
    	return res.status(200).json({});
    }
    next();
});

//Middlewares
app.use(express.json());


//Routes
app.use(require('./routes/mangas'));

//Starting server
app.listen(port, function() {
  console.log('Servidor web escuchando en el puerto', port);
});


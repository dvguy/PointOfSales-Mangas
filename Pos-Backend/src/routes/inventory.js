//Este es el punto de enlace con la BD aquí se definen las rutas de
//comunicacion con la BD. Si lo comentamos ya no funciona pos man
//la ruta que se toma en el url es let url =`http://127.0.0.1:1000${slash}${input.value}`;
//esto lo podemos ver en Pos-Frontend/controllers/home.controllers.js


const express = require('express');

const router = express.Router(); //Crea un objeto para poder definir rutas

const connection = require('../database');


router.get('/employees/:name', (req,res) => {
    const {name} = req.params;
    // const query2 ='SELECT * FROM transactions WHERE employee = (?)'
    connection.query('CALL searchByTicketOrCashier(?)', [name],(err,rows,fields)=>{
        if(!err){   
            res.json(rows)
            connection.end()
        }else{
            console.log(err)
        }
    });

});


router.get('/inventory', (req, res) => { //Inventario es la tabla
    connection.query('SELECT * FROM inventario', (err,rows,fields) => { //ROWS son los datos
        if(!err){
            res.json(rows)
        }else{
            console.log(err);
        }
    })
});

router.get('/inventory/:param', (req, res) => { //Inventario es la tabla
    const {param} = req.params;
    connection.query('CALL BUSCAR(?)', [param], (err,rows,fields) => { //ROWS son los datos
        if(!err){
            res.json(rows)
        }else{
            console.log(err);
        }
    })
});

// router.post('/', (req, res) =>{
//     const {titulo, autor, precio, stock} = req.body;
//     const query = 'CALL mangaAdd(?,?,?,?);';
//     connection.query(query, [titulo, autor, precio, stock], (err, rows, fields) => {
//         if(!err){
//             res.json({status: 'Manga Added'});
//         }else{
//             console.log(err);
//         }
//     })
// });

// router.put('/:titulo', (req,res) =>{
//     const {stock} = req.body;
//     const {titulo} = req.params;
//     const query = 'CALL mangasUpdate(?,?);'
//     connection.query(query, [titulo, stock], (err, rows, fields) => {
//         if(!err){
//             res.json({status: "Stock Updated"});
//         }else{
//             console.log(err);
//         }
//     });
// });

// router.delete('/:titulo', (req,res) =>{
//     const {autor, precio, stock} = req.body;
//     const {titulo} = req.params;
//     connection.query('DELETE FROM `inventario` WHERE titulo = ?', [titulo, autor, precio, stock], (err, rows, fields) => {
//         if(!err){
//             res.json({status: "Manga Deleted"})
//         }else{
//             console.log(err);
//         }
//     })
// });


module.exports = router;
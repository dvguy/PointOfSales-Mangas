const express = require('express');
const router = express.Router(); //Crea un objeto para poder definir rutas

const conexion = require('../database');

router.get('/', (req, res) => { //Inventario es la tabla
    conexion.query('SELECT * FROM inventario', (err,rows,fields) => { //ROWS son los datos
        if(!err){
            res.json(rows)
        }else{
            console.log(err);
        }
    })
});

router.get('/:param', (req, res) => { //Inventario es la tabla
    const {param} = req.params;
    conexion.query('SELECT LOWER (titulo) FROM inventario');
    const query = 'CALL BUSCAR(?);'
    conexion.query('CALL BUSCAR(?)', [param], (err,rows,fields) => { //ROWS son los datos
        if(!err){
            res.json(rows)
        }else{
            console.log(err);
        }
    })
});

router.post('/', (req, res) =>{
    const {titulo, autor, precio, stock} = req.body;
    const query = 'CALL mangaAdd(?,?,?,?);';
    conexion.query(query, [titulo, autor, precio, stock], (err, rows, fields) => {
        if(!err){
            res.json({status: 'Manga Added'});
        }else{
            console.log(err);
        }
    })
});

router.put('/:titulo', (req,res) =>{
    const {stock} = req.body;
    const {titulo} = req.params;
    const query = 'CALL mangasUpdate(?,?);'
    conexion.query(query, [titulo, stock], (err, rows, fields) => {
        if(!err){
            res.json({status: "Stock Updated"});
        }else{
            console.log(err);
        }
    });
});

router.delete('/:titulo', (req,res) =>{
    const {autor, precio, stock} = req.body;
    const {titulo} = req.params;
    conexion.query('DELETE FROM `inventario` WHERE titulo = ?', [titulo, autor, precio, stock], (err, rows, fields) => {
        if(!err){
            res.json({status: "Manga Deleted"})
        }else{
            console.log(err);
        }
    })
});
module.exports = router;
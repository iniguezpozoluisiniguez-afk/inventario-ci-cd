const express = require('express');
const cors = require('cors');
const { crearProducto, listarProductos } = require('./inventoryService');
const app = express();
app.use(cors());
app.use(express.json());
app.get('/api/productos', (req,res)=>res.json({data:listarProductos()}));
app.post('/api/productos',(req,res)=>{
  try {
    const nuevo = crearProducto(req.body);
    res.status(201).json({data:nuevo});
  } catch(e){
    res.status(400).json({error:"VALIDATION_ERROR",message:e.message});
  }
});
module.exports = app;
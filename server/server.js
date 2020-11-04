require('./config/config');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/', (req,res)=>{
    res.json('Hola mundo');
});

console.log('Hola');

app.get('/usuarios',(req,res)=>{
    res.json('Get de usuarios');
});

app.put('/usuarios/:id',(req,res)=>{
    let id = req.params.id;
    res.json(id);
})

app.post('/usuarios',(req, res)=>{
    let body = req.body;

    if(body.nombre === undefined){
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es un campo nesesario'
        })
    }else{

        res.json({
            persona: body
        })
    }

   
})

app.delete('/usuarios',(req,res)=>{
    res.json('DELETE usuarios');
})

app.listen(process.env.PORT,()=>{
    console.log('Seridor corriendo en el puerto', process.env.PORT);
})
const express = require('express');
const app=express();
const porta = 3000;
app.get('/',(req,res)=>{
    res.send('DGTONY WEB SOLUTIONS')
})
app.get('/canal',(req,res)=>{
    res.json({nome:'GIUSSEPPE Toni',idade:66,profissao:'programador',inguagem:'NodeJS'})

})
app.listen(porta || 3000,()=>{console.log('Servidor Rodando')})
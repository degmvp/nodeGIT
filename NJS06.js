const http = require('http');
const porta =3000;
const host = '127.0.0.1';
const fs = require('fs')

const server=http.createServer((req,res)=>{
  fs.appendFile('srv_nodesjs.txt','Cat-App NODEJS-NJS022',function(err){
    if(err) {
        return console.log(err);
    }
    console.log("saved!");
    res.end()
})
})

server.listen(porta,host,()=>{console.log('Servidor Rodando')})
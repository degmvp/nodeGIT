const http = require('http');

const porta =3000;
const host = '127.0.0.1';
const fs = require('fs')

const server=http.createServer((req,res)=>{
  fs.readFile('srv_nodesJs.txt',(err,arquivo)=>{
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.write(arquivo)
    return res.end()
})
})

server.listen(porta,host,()=>{console.log('Servidor Rodando')})
const http = require('http')
const srvND = http.createServer((req,res)=>{
    const resp = []
    resp['/'] = '<h1>Home</h1>'
    resp['/contato'] = '<h1>Contato</h1>'
    resp['SemURL'] = '<h1>URL sem resposta definida </h1>'
    res.end(resp[req.url] || resp['SemURL'])
})

srvND.listen(3001, 'localhost',()=>{
    console.log('Servidor Rodando: http://localhost:3001')
    console.log('ctrl + C Desliga Servidor')
})
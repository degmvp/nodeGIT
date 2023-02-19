const http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-Type':'text/plain'
    });
    res.write('DGTONY Cursos\nCurso de NODEJS - Degmar');
    res.end();
    }).listen(1337);
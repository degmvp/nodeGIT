const http = require('http');
const porta =3000;
const host = '127.0.0.1';

const servidor = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    if(req.url=='/'){
        res.write('<h1>Padrao MVC-Route</h1>');
    }else if(req.url=='/canal'){
        res.write('<h1>DGTONY Cursos</h1>');
    }if (req.url=='/curso'){
        res.write('<h1>Curso de Node JS</h1>');
    }if (req.url=='/dgtony'){
        res.write('<h1>DGTONY Web Solutions </h1>');
    res.end();
    }
});

servidor.listen(porta,host,()=>{console.log('Servidor HTTP online!')
                console.log('ctrl + C Desliga Servidor')
});

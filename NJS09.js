const express = require('express');
const server = express();
server.use(express.json());
//retorna um curso
const cursos =['curso master','curso pleno','curso basico'];
server.get('/cursos/:index',(req, res)=>{
    const { index} = req.params;
    return res.json(cursos[index]);
})
//criar um novo cursos
server.post('/cursos', (req, res)=> {
    const { name} = req.body;
    cursos.push(name);
    return res.json(cursos);
});
// retornar todos os cursos
server.get('/cursos',(req,res)=>{
    return res.json(cursos)
})
// atualizar um curso
server.put('/cursos/:index',(req, res)=>{
    const {index} = req.params;
    const { name } = req.body;
    cursos[index] = name;
    return res.json(cursos);
})
//deletar um curso
server.delete('/cursos/:index',(req, res)=>{
    const { index } = req.param;
    cursos.splice(index, 1);
    return res.json({message: 'Curso deletado'});
});
server.listen(3000);

console.log(`Servidor rodando em http://localhost:3000`)
console.log('Para derrubar o servidor: ctrl + c');
console.log('Consultar registros pelo INSOMNIA');


/* import express from 'express';

const app = express(); 

app.use(express.json());

//rota que liga usuários http://localhost:3333/users
//o qe vem depois da url base, no caso 'users' é o recurso 

//métodos http [GET: para buscar ou listar infos
//POST: para criar alguma info 
//PUT: para atualizar info
//DELETE]

//Corpo (request Body): dados para a criação o atualização de informações
//Route Params: identificar qual recurso quero atualizar ou deletar
//Query Params: usdo principalmente em listagem, paginação, filtros e ordenação

app.delete('/users/:id', (request, response) => {
    console.log(request.params);
    const users = [
        { name: 'Diego', age: 25 },
        { name: 'Giovanna', age: 21 },
    ];
    return response.json(users);
});


app.post('/users', (request, response) => {
    console.log(request.body);
    const users = [
        { name: 'Diego', age: 25 },
        { name: 'Giovanna', age: 21 },
    ];
    return response.json(users);
});

//porta padrão é 80
app.listen(3333); 


 */
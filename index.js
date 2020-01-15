const express = require('express');

const app = express();

app.use(express.json());

// Métodos HTTP: GET(exibir), POST(criar), PUT(alterar) e DELETE(deletar)

// Query Params (GET): request.query (Filtros, ordenação, paginação, ...)
// Route Params (PUT, DELETE): request.params (Identificar um recurso na alteração ou remoção)
// Body (POST, PUT): request.body (Dados para criação ou alteração de um registro)

app.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({ message: 'Hello Oministack 2'});
});

app.listen(3333);
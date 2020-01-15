const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-ykpko.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());

// Métodos HTTP: GET(exibir), POST(criar), PUT(alterar) e DELETE(deletar)

// Query Params (GET): request.query (Filtros, ordenação, paginação, ...)
// Route Params (PUT, DELETE): request.params (Identificar um recurso na alteração ou remoção)
// Body (POST, PUT): request.body (Dados para criação ou alteração de um registro)
// MongoDB (não-relacional)

app.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({ message: 'Hello Oministack 2'});
});

app.listen(3333);
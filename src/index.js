const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebSocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-ykpko.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
app.use(cors( ));
app.use(express.json());
app.use(routes);

server.listen(3333);

// Métodos HTTP: GET(exibir), POST(criar), PUT(alterar) e DELETE(deletar)

// Query Params (GET): request.query (Filtros, ordenação, paginação, ...)
// Route Params (PUT, DELETE): request.params (Identificar um recurso na alteração ou remoção)
// Body (POST, PUT): request.body (Dados para criação ou alteração de um registro)
// MongoDB (não-relacional)
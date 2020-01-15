const { Router } = require('express');

const routes = Router();

routes.post('/devs', (request, response) => {
    const { github_username } = request.body;

    console.log(request.body);
    return response.json({ message: 'Hello Oministack 2'});
});

module.exports = routes;
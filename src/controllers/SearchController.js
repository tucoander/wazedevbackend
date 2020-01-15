const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

//Funções padrão index (mostrar lista), show (mostrar 1), store, update, destroy

module.exports = {
    async index(request, response) {
        const { latitude, longitude, techs } = request.query;
        // buscar todos os devs num raio de 10km 
        // filtrar por tecnologias
        
        const techsArray = parseStringAsArray(techs);

        console.log(techsArray);
        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [ longitude, latitude ],
                    },
                    $maxDistance: 10000,
                }
            }
        });

        return response.json({devs});
    }

};
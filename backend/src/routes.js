const { Router} = require('express');

const DevController = require('./controles/DevController');
const SearchController = require('./controles/SearchController');
 

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.get('/search', SearchController.index);

routes.put('./devs', DevController.update)

module.exports = routes;

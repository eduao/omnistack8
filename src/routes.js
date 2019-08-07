const express = require('express');
const DevController = require('./controllers/DevController');
const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({item: 'oi'});
});

routes.post('/devs', DevController.store);

module.exports = routes;
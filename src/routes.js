const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');
const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({item: 'oi'});
});

routes.post('/devs/index', DevController.index);
routes.post('/devs', DevController.store);
routes.post('/devs/:targetDevId/dislikes', DislikeController.store);
routes.post('/devs/:targetDevId/likes', LikeController.store);

module.exports = routes;
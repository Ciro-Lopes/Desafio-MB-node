const express = require('express');
const User = require('./controllers/user');

const routes = express.Router();

routes.post('/users', User.create);
routes.get('/users', User.index);
routes.get('/users/:idUser', User.show);
routes.put('/users/:idUser', User.update);
routes.delete('/users/:idUser', User.delete);

module.exports = routes;
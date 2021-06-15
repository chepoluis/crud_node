const express = require('express');
const route = express.Router(); // Create routes in a separate file

const services = require('../services/render'); // Render the files

/**
 * @description Root route
 * @method GET /
 */
route.get('/', services.homeRoutes);

/**
 * @description Add user route
 * @method GET /
 */
route.get('/add-user', services.addUserRoute);

/**
 * @description Update user route
 * @method GET /
 */
route.get('/update-user', services.updateUserRoute);

module.exports = route;
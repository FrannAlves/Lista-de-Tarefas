// Importing necessary dependencies
require('dotenv').config();
const express = require('express');

// Importing route handlers from 'rotas' module
const rotas = require('./rotas');

// Creating an Express application
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Using the route handlers defined in 'rotas'
app.use(rotas);

// Starting the server and listening on the specified port or defaulting to 3000
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
});

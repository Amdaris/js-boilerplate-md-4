const express = require('express');
const bodyParser = require('body-parser');
const api_endpoints = require('../api');
const app = express();
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Internship Test API",
            version: "1.0.0",
        },
    },
    apis: ["./src/api/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

app.use(bodyParser.json());

app.use('/', does_method_exist, api_endpoints);

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('*', (req, res) => {
  res.status(404).send('404 Not Found');
});

function does_method_exist(req, res, next) {
  next();
}


module.exports = app;

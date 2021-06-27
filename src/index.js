const express = require('express');
const swaggerJSDoc = require('../Marvel-Api-marvelapi-1.0.0-resolved.json');
const router = require('./routes/characterRoute');
const swaggerUi = require('swagger-ui-express');
const { nodeModuleNameResolver } = require('typescript');
const app = express();
require("dotenv").config()

app.use(express.json());
app.use('/', router,swaggerUi.serve, swaggerUi.setup(swaggerJSDoc));

app.listen(process.env.PORT || 8084, () => {
    console.log('Server started')
})
module.exports = app;
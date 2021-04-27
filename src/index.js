const express = require('express');
const swaggerJSDoc = require('../Marvel-Api-marvelapi-1.0.0-resolved.json');
const swaggerUi = require('swagger-ui-express');
const router = require('./routes/route');
const app = express();

app.use(express.json());
app.use('/', router);

app.listen(process.env.PORT || 8084, () => {
    console.log('Server started')
})
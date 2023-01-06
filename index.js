const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// import the controllers
const agentsController = require('./controllers/agents');
const locationsController = require('./controllers/locations');

// define routes for the agents controller
app.get('/agents', agentsController.index);
app.get('/agents/:id', agentsController.getById);
app.post('/agents', agentsController.create);
app.put('/agents/:id', agentsController.update);
app.delete('/agents/:id', agentsController.delete);

// define routes for the locations controller
app.get('/locations', locationsController.index);
app.get('/locations/:id', locationsController.getById);
app.post('/locations', locationsController.create);
app.put('/locations/:id', locationsController.update);
app.delete('/locations/:id', locationsController.delete);

// start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

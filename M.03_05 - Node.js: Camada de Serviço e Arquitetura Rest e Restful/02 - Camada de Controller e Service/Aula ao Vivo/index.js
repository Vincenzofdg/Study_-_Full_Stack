const express = require('express');
const bodyParser = require('body-parser');

const artistController = require('./controllers/artistControllers');
const songController = require('./controllers/songController');
const app = express();

app.use(bodyParser.json());

app.post('/artist', artistController.create);

app.post('/song', songController.create);

app.get('/song', songController.getAll);

app.post('/songwithartist', songController.createSongAndArtist);

app.listen(3000, () => console.log('On na 3000'));

// constrolle => service => model
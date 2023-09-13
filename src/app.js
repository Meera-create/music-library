
const express = require('express');
const artistRouter = require('./routes/artists');
//const createArtist=require('./controllers/artists')


const app = express();

app.use(express.json());

app.use('/artists', artistRouter);
//sends to artists router with the endpoint /artists

app.get("/", (_req, res) => {
  res.send("Hello World!");
});


module.exports = app;

















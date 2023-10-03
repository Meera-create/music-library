
const express = require('express');
const artistRouter = require('./routes/artists');
//const createArtist=require('./controllers/artists')
const albumRouter=require('./routes/albums')

const app = express();

app.use(express.json());

app.use('/artists', artistRouter);

app.use('/albums',albumRouter)


app.get("/", (_, res) => {
  res.send("Hello World!");
});
//underscore means we dont need one of the variables


module.exports = app;

















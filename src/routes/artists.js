const createArtist= require('../controllers/artists');
const express=require('express')


const artistRouter= express.Router();


artistRouter.post('/',createArtist);


module.exports = artistRouter
//added curly brackets
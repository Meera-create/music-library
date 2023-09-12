const createArtist= require('../controllers/artists');
const express=require('express')


const artistRouter= express.Router();

// artistRouter.get('/',createArtist.get);
artistRouter.post('/', createArtist);




module.exports = artistRouter;
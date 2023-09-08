const {createArtist} = require('../controllers/artists');
const express=require('express')
// const app=require('../app')

const artistRouter= express.Router();

// artistRouter.post('/',createArtist);
//???

artistRouter.post('/', createArtist)



module.exports = {artistRouter}
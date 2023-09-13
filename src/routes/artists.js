const controller= require('../controllers/artists');
const express=require('express')


const artistRouter= express.Router();


artistRouter.post('/',controller.createArtist)
//sends to artist controller

artistRouter.get('/',controller.getAllArtist)
//to get all records from database

artistRouter.get('/:id',controller.getArtistByID)
//get artists by ID

artistRouter.put('/:id',controller.updatingArtist)
//modify artist record

module.exports = artistRouter

const albumController= require('../controllers/albums');
const express=require('express')



const albumRouter= express.Router();


albumRouter.post('/',albumController.createAlbum)









module.exports = albumRouter

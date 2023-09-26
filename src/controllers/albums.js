const db = require('../db/index')

    //ALBUMS#

     

    const createAlbum = async(req,res)=>{
     
      const {name,year} = req.body
      //const{artistid}=req.params
     
      //console.log('HEEELOOO CONTROLLER')
    try{
    const{rows:[album]}=await db.query(`INSERT INTO Albums(name,year) VALUES ($1,$2) RETURNING *`, [name,year])
    res.status(201).json(album)
    //console.log('HDHFHFJUDJNDN')
    }catch(err){
      res.status(500).json(err.message)
     
    }
    }


module.exports={createAlbum}
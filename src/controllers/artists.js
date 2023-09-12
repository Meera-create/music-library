const db = require('../db')


const createArtist = async(req,res)=>{
  const name = req.body.name;
  const genre=req.body.genre;

try{
const{rows:[artist]}=await db.query(`INSERT INTO Artists (name,genre) VALUES ($1,$2) RETURNING *`, [name,genre])
res.status(201).json(artist)
}catch(err){
  res.status(500).json(err.message)
}

}

module.exports = createArtist

//exports.name
//way to export and create at the same time


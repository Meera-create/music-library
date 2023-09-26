const db = require('../db/index')


const createArtist = async(req,res)=>{
  const {name,genre} = req.body
 
try{
const{rows:[artist]}=await db.query(`INSERT INTO Artists (name,genre) VALUES ($1,$2) RETURNING *`, [name,genre])
res.status(201).json(artist)

}catch(err){
   
  res.status(500).json(err.message)
}
}


//gets all artists from database 
const getAllArtist = async(_req,res)=>{
 
try{
const{rows}=await db.query('SELECT * FROM Artists')
res.status(200).json(rows)
}catch(err){
   
  res.status(500).json(err.message)
}
}


const getArtistByID = async(req,res)=>{
 
  try{
    const{id}=req.params
  const{rows:[artist]}=await db.query('SELECT * FROM Artists WHERE id=$1',[id])

  if(!artist)
  return res.status(404).json({message:`artist with ${id} does not exist`})

  res.status(200).json(artist)
  }catch(err){
    res.status(500).json(err.message)
  }
  }
  //instead of placing the [id] in the script, we use $1 (auto escaping)


  const updatingArtist = async(req,res)=>{
 
    const{id}=req.params
    const{name,genre}=req.body

    try{
    const{rows:[artist]}=await db.query('UPDATE Artists SET name=$1, genre=$2 WHERE id=$3 RETURNING *',[name,genre,id])
  
    if(!artist)
    return res.status(404).json({message:`artist with ${id} does not exist`})
  
    res.status(200).json(artist)
    }catch(err){
      console.log(err)
      res.status(500).json(err.message)
    }
    }

    const deletingArtists = async(req,res)=>{
 
      const{id}=req.params
      //const{name,genre}=req.body
  
      try{
      const{rows:[artist]}=await db.query('DELETE FROM Artists WHERE id=$1 RETURNING *',[id])
    

      if(!artist)
      return res.status(404).json({message:`artist with ${id} does not exist`})
    
      res.status(200).json(artist)
      }catch(err){
        res.status(500).json(err.message)
      }
      }
``
     

  

module.exports = {createArtist,getAllArtist,getArtistByID,updatingArtist,deletingArtists}
//exports.name
//way to export and create at the same time


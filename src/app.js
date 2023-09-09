
const express = require('express');
const artistRouter = require('./routes/artists');
const { createArtist } = require('./controllers/artists');


const app = express();

app.use(express.json());

app.use('/artists',artistRouter,(req,res)=>{
  const created=createArtist(req.body)
   res.status(201).send(created)
})


//delete....below
  // it('it creates a new artist in the database',async ()=>{
  //   const {status, body} = (await request(app).post('/artists')).send({
  //     name:'Tame Impala',
  //     genre:'Rock',
  //   });

  //   expect(status).to.equal(201);
  //   expect(body.name).to.equal('Tame Impala');
  //   expect(body.genre).to.equal('rock');

  //   //delete...above



app.get("/", (_req, res) => {
  res.send("Hello World!");
});


module.exports = app;

















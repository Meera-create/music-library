const {expect} = require('chai');
const request=require('supertest');
const db = require('../src/db')
const app=require('../src/app');


describe('Create Album',()=>{

  let artist
  beforeEach(async ()=>{
    const{rows}=await db.query('INSERT INTO Artists (name,genre) VALUES($1,$2) RETURNING *',[
      'Tame Impala',
      'rock',
    ])
    artist=rows[0]

  });



  describe('/albums',()=>{
    describe('POST',()=>{
      it('it creates a new album in the database',async () => {
        
        const {status, body} = await request(app).post('/albums').send({
          //const {status, body} = await request(app).post('/artists/$(artist.id)/albums').send({
          name:'AlbumName',
          year:2020,
          artistid:artist.id
        });
        //console.log('grgwhkj',body)
        expect(status).to.equal(201);
        expect(body.name).to.equal('AlbumName');
        expect(body.year).to.equal(2020);
        expect(body.artistid).to.equal(artist.id)

      


      });
    });
  });
});
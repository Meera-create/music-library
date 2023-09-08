const {expect} = require('chai');
const request=require('supertest');
const app=require('../src/app');
const db = require('../src/db')

describe('create artist',()=>{
  describe('/artists',()=>{
    describe('POST',()=>{
      it('it creates a new artist in the database',async ()=>{
        const {status, body} = (await request(app).post('/artists')).send({
          name:'Tame Impala',
          genre:'Rock',
        });

        expect(status).to.equal(201);
        expect(body.name).to.equal('Tame Impala');
        expect(body.genre).to.equal('rock');

        const {
          rows:[artistData],
        }= await db.query('SELECT * FROM Artists WHERE id=${body.id');
        expect(artistData.name).to.equal('Tame Impala');
        expect(artistData.genre).to.equal('rock');



      });
    });
  });
});
const app = require ('../src/app')
const db = require('../src/db')
const {expect} = require('chai')
const request = require('supertest')

describe('Get all Albums',()=>{
  let albums
  beforeEach(async ()=>{
    const responses = await Promise.all([
      db.query('INSERT INTO Albums (name,year,artistid) VALUES ($1,$2,$3) RETURNING *',[
        'Pink',
        2018,
        3
      ]),
      db.query('INSERT INTO Albums (name,year,artistid) VALUES ($1,$2,$3) RETURNING *',[
        'Queen',
        2020,
        2
      ]),
      db.query('INSERT INTO Artists (name,year,artistid) VALUES ($1,$2,$3) RETURNING *',[
        'Wonder',
        2013,
        1
      ]),
    ])

    albums=responses.map(({rows})=>rows[0])
  })

  describe('GET /albums',()=>{
    it('returns all album records in the database',async()=>{
      const{status,body}=await request(app).get('/albums').send()

      expect(status).to.equal(200)
      expect(body.length).to.equal(4)
      //changed 3 to 4

      body.forEach((albumEntry)=>{
        const expected = albums.find((a)=>a.id === albumEntry.id)

        expect(albumEntry).to.deep.equal(expected)
      })
    })
  })


describe('GET /albums/{id}',()=>{
  it('returns the album with the correct id',async()=>{
    const {status,body}=await request(app).get(`/albums/${albums[0].id}`).send()

    expect(status).to.equal(200)
    expect(body).to.deep.equal(albums[0])
  })

it('returns a 404 if the album does not exist',async()=>{
  const {status,body}=await request(app).get(`/albums/999999999`).send()

  expect(status).to.equal(404)
  expect(body.message).to.equal('album with 999999999 does not exist')
})


})
})

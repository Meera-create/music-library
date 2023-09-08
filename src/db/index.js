const {Pool} = require('pg');

const pool= new Pool()

module.exports= {
  query:(text,params) => pool.query(text,params)

  //exports an async function that we can use to connect to the DB
}
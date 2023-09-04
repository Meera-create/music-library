
const express = require('express');

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

// app.get('/HelloWorld',(req,res)=>{
//   res.status(200).json({result:'Hello World'})
// })

module.exports = app;

















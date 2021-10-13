require('dotenv').config();
const express = require('express');
const app = express();
app.set('view engine','ejs');

const pg = require('pg');
const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
};
const client = new pg.Client(config);
client.connect();

app.get('/',(req,res)=>{
    client.query('SELECT id,question FROM objectives;')
    .then((result) => {
//      console.log('result.rows:',result.rows);
      const templateVars = {rows: result.rows};
      res.render('home',templateVars);  
    //   client.end();
    })
    .catch((error)=>{ 
      console.log('browse query error:',error);
      client.end();
    });
});

app.get('/delete/:id',(req,res)=>{
    const id = req.params.id;
    client.query('DELETE FROM objectives WHERE id = $1;',[id])
    .then((result) => {
//      console.log('result.rows:',result.rows);
      const templateVars = {rows: result.rows};
      res.render('home',templateVars);  
    //   client.end();
    })
    .catch((error)=>{ 
      console.log('browse query error:',error);
      client.end();
    });
});

const port = process.env.PORT || 7889;
app.listen(port, ()=>{
    console.log(`Server is listening on port=${port}`);
});
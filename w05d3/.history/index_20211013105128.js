const express = require('express');
const app = express();
app.set('view engine','ejs');

const pg = require('pg');
const config = {
    user: 'postgres',
    password: 'postgres',
    database: 'spot',
    host: 'localhost',
    port: '5433'
};
const client = new pg.Client(config);
client.connect();

app.get('/',(req,res)=>{
    console.log('this is the homepage end-point');
});

const port = process.env.PORT || 7889;
app.listen(port, ()=>{
    console.log(`Server is listening on port=${port}`);
});
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
client.query('SELECT * FROM objectives LIMIT 3;')
  .then((result) => console.log('result:',result));
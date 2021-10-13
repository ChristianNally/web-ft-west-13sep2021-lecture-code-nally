const pg = require('pg');

const config = {
    user: 'postgres',
    password: 'postgres',
    database: 'spot',
    host: 'localhost',
    port: '5433'
};

const client = new pg.Client(config);
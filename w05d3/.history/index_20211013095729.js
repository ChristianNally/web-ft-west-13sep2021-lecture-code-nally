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

// client.query('SELECT * FROM objectives LIMIT 3;')
//   .then((result) => console.log('result:',result));

const verb = process.argv[2];

switch (verb) {
  case 'browse':
      console.log('browse goes here.');
      client.query('SELECT id,question FROM objectives;')
        .then((result) => console.log('result:',result));
      client.end();
    break;
  default:
      console.log('i do not recognize that verb!');
      client.end();
    break;
}

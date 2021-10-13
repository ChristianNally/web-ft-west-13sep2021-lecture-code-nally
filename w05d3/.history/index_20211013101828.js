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
            .then((result) => {
              console.log('result.rows:',result.rows);
              client.end();
            })
            .catch((error)=>{ 
              console.log('browse query error:',error);
              client.end();
            });
    break;
    case 'read':
      console.log('read goes here.');
      const id = process.argv[3];
      client.query(`SELECT * FROM objectives WHERE id = ${id};`)
            .then((result) => {
              console.log('result.rows:',result.rows);
              client.end();
            })
            .catch((error)=>{ 
              console.log('read query error:',error);
              client.end();
            });
    break;
    case 'delete':
      console.log('delete goes here.');
      const id = process.argv[3];
      client.query(`DELETE FROM objectives WHERE id = ${id};`)
            .then((result) => {
              console.log('result.rows:',result.rows);
              client.end();
            })
            .catch((error)=>{ 
              console.log('delete query error:',error);
              client.end();
            });
    break;
  default:
      console.log('i do not recognize that verb!');
      client.end();
    break;
}

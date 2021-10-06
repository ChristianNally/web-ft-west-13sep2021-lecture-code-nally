const bcrypt = require('bcrypt');

const plaintextPassword = 'abcd';


// bcrypt.genSalt(10, function(err, salt) {
//   bcrypt.hash(plaintextPassword, salt, function(err, hash) {
//     console.log('hash:',hash);
//   });
// });

bcrypt.genSalt(10)
  .then((salt) => {
    console.log('salt:', salt);
    return bcrypt.hash(plaintextPassword, salt);
  })
  .then((hash) => {
    console.log('hash:', hash);
  });

const hash = '$2b$10$JHVvbryWHKHDJRoR8v3l8exjeiDG4ZkH1czi/r3nblXS1GfaVnzzc';

bcrypt.compare('abcd', hash)
  .then((result) => {
    console.log('do the passwords match? ', result);
  });


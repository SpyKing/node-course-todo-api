// const bcrypt = require('bcryptjs');
// const {SHA256} = require('crypto-js');
// const jwt = require('jsonwebtoken');

// var password = '123abc!';

// bcrypt.genSalt(10, (e, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash);
//     });
// });

// var hashedPassword = '$2a$10$gwHqjuMPIKvRKnkt2RbpNOa4wmv3Sm1M2vexSnwM6DchlswgsasEG'

// bcrypt.compare(password, hashedPassword, (err, result) => {
//     console.log(result);
// });

// var data = {
//     id: 10
// }

// var token = jwt.sign(data, '123abc');
// console.log('Encoded:', token);

// var decoded = jwt.verify(token, '123abc');
// console.log('Decoded:', decoded);

// var message = 'I am user number 9007';
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
//     id: 4
// };
// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if (resultHash === token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed');
// }

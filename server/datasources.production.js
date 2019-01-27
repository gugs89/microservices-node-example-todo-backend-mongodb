'use strict';
let fs = require('fs');
var ca = fs.readFileSync(__dirname + '/rds-combined-ca-bundle.pem', 'utf8');
var datasource = {
  host: '${MONGODB}',
  username: '${MONGODB_USER}',
  password: '${MONGODB_PASSWORD}',
  connector: 'mongodb',
  server: {
    ssl: true,
    sslValidate: false, // Como son certificados auto-firmados, desactivamos la validación
    sslCA: ca, // El arreglo del buffer de certificados válidos
  }
};

module.exports = {
  db: datasource,
};

'use strict';
console.log('datasorce production');
let fs = require('fs');
var ca = fs.readFileSync(__dirname + '/rds-combined-ca-bundle.pem', 'utf8');
var datasource = {
  host: '${MONGODB}',
  username: '${MONGODB_USER}',
  password: '${MONGODB_PASSWORD}',
  connector: 'mongodb',
  url: 'mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB}:27017/?ssl_ca_certs=rds-combined-ca-bundle.pem&replicaSet=rs0',
  url: 'mongodb://myuser:mypasswordfromuser@dbcluster-sh2od1qsfu1d.cluster-ck8umzpmv3ua.us-east-1.docdb.amazonaws.com:27017/?ssl_ca_certs=rds-combined-ca-bundle.pem&replicaSet=rs0',
};

module.exports = {
  db: datasource,
};

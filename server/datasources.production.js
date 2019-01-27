var fs = require('fs');
var ca = fs.readFileSync(__dirname + "/rds-combined-ca-bundle.pem", 'utf8');
var datasource = {
    host: "dbcluster-k32jythdhppo.cluster-ck8umzpmv3ua.us-east-1.docdb.amazonaws.com",
    username: "myuser",
    password: "mypasswordfromuser",
    connector: "mongodb",
    server: {
        ssl: true,
        sslValidate: false, // Como son certificados auto-firmados, desactivamos la validación
        sslCA: ca, // El arreglo del buffer de certificados válidos
    }
};
module.exports = {
    db: datasource
};

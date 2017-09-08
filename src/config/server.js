const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const queryParser = require('express-query-int')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(queryParser())

server.listen(process.env.PORT ? process.env.PORT : 3001, function () {
    console.log("Express server listening on port " + (process.env.PORT ? process.env.PORT : 3001));
});

module.exports = server
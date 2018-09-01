const express = require('express')

module.exports = function(server) {

    const router = express.Router()
    server.use('/', router)


    server.get('/health_check', function(req, res) {
        res.send("OK");
    });
    
    const todo = require('../api/todo/todoService')
    todo.register(router, '/todo')
}
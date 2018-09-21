const express = require('express')
var todoController = require('../api/todo/todoController');

module.exports = function(server) {

    const router = new express.Router()

    router.get('/health_check', function(req, res) {
        res.send("OK");
    });
    
    const todo = require('../api/todo/todoRoute');
    router.use('/todo', todo);

    server.use('/', router)
        
}

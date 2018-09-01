const express = require('express')

module.exports = function(server) {

    const router = express.Router()
    server.use('/', router)

    const todo = require('../api/todo/todoService')
    todo.register(router, '/todo')
}
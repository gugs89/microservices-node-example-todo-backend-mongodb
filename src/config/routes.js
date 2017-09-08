const express = require('express')

module.exports = function(server) {

    // Definir URL base para todas as rotas 
    const router = express.Router()
    server.use('/', router)

    // Rotas de Ciclo de Pagamento 
    const todo = require('../api/todo/todoService')
    todo.register(router, '/todo')
}
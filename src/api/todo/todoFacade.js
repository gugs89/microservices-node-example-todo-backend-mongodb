const Facade = require('../../lib/facade');
const todoSchema = require('./todoSchema');

class TodoFacade extends Facade {}

module.exports = new TodoFacade('Todo', todoSchema);
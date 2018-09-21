const Controller = require('../../lib/controller');
const todoFacade = require('./todoFacade');

class TodoController extends Controller {}

module.exports = new TodoController(todoFacade);

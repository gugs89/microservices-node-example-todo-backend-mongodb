const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/todo', { useMongoClient: true })

mongoose.Error.messages.general.required = "The attibute '{PATH}' is mandatory."
mongoose.Error.messages.Number.min = "'{VALUE}' is lower then '{MIN}'."
mongoose.Error.messages.Number.max = "'{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}' is not valid for attribute '{PATH}'."
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://' + 
		(process.env.MONGODB ? process.env.MONGODB : 'localhost') + ':' + 
		(process.env.MONGODB_PORT ? process.env.MONGODB_PORT : '27017') +
		'/todo')

mongoose.Error.messages = {
	general: {
		required: "The attibute '{PATH}' is mandatory."
	},
	Number: {
		min: "'{VALUE}' is lower then '{MIN}'.",
		max: "'{VALUE}' is greather then '{MAX}'."
	},
	String: {
		enum: "'{VALUE}' is not valid for attribute '{PATH}'."
	}
}

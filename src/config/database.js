const mongoose = require('mongoose')
mongoose.Promise = global.Promise

function getDBAuthentication() {
	return process.env.MONGODB_USER && process.env.MONGODB_PASS ?
		 process.env.MONGODB_USER + ':'+ process.env.MONGODB_PASS + '@'
		 : ''
}

function getDBURL() {
	return process.env.MONGODB ? process.env.MONGODB : 'localhost'
}
function getDBPort() {
	return process.env.MONGODB_PORT ? process.env.MONGODB_PORT : '27017'
}


var connectionURL = 'mongodb://' + getDBAuthentication() + ;


module.exports = mongoose.connect('mongodb://' + 
		getDBAuthentication() +
		getDBURL() + ':' +
		getDBPort() + 
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

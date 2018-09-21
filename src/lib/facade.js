const dynamoose = require('../config/database');


class Facade {
	constructor(name, schema) {
		this.model = dynamoose.model(name, schema);
	}

	create(body) {
		const model = new this.model(body);
		return model.save();
	}

	find(...args) {
		return this.model
			.scan(...args)
			.exec();
	}

	findOne(...args) {
		return this.model
			.findOne(...args)
			.exec();
	}

	findById(...args) {
		return this.model
			.get(...args)
			.then((obj) => obj)
			.catch((e) => console.log(e));
	}

	update(...args) {
		return this.model
			.update(...args)
			.then((obj) => obj)
			.catch((e) => console.log(e));
	}

	remove(...args) {
		return this.model
			.delete(...args)
			.then((obj) => obj)
			.catch((e) => console.log(e));
	}
}

module.exports = Facade;
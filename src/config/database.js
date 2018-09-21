const dynamoose = require('dynamoose');
const awsconfig = require('./aws');

dynamoose.AWS.config.update(awsconfig);

if( process.env.ENVIRONMENT != "PROD" ) {
	dynamoose.local("http://" + process.env.AWS_ENDPOINT + ":8000");
}

module.exports = dynamoose

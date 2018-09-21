let AWSConfig = {
    apiVersion: "2012-08-10",
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET,
    region: process.env.AWS_REGION
};

module.exports = AWSConfig;

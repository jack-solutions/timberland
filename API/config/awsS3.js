const AWS = require('aws-sdk');
const dotenv = require('dotenv');
dotenv.config();

const s3 = new AWS.S3({
    accessKeyId : process.env.ACCESS_KEYS,
    secretAccessKey : process.env.SECRET_KEYS,
    region : process.env.REGION
    // region : 'eu-north-1'
});

module.exports = s3;
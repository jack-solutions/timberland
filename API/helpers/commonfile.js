const multer = require('multer');
const multerS3 = require('multer-s3');
const s3 = require('../config/awsS3');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const nodeMailer = require('nodemailer');
const AWS = require('aws-sdk');
// var ses = new AWS.SES();
var smtpTransport = require('nodemailer-smtp-transport');
const dotenv = require('dotenv');
dotenv.config();


const uploadS3 = multer({
    storage : multerS3({
        s3 : s3,
        bucket : process.env.BUCKET_NAME,
        // acl : 'public-read',
        contentDisposition : 'inline',
        // contentType : multerS3.AUTO_CONTENT_TYPE,
        contentType : function (req, file, cb) {
          cb(null, file.mimetype)
        },
        key : function(req,file,cb){
            const extname = path.extname(file.originalname);
            const key = path.basename(file.originalname,extname) + '-' + uuidv4() + extname;
            cb(null,key); 
        }
    })
});

  
module.exports = {
    uploadS3
}
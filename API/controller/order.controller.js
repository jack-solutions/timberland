const Order = require('../models/order.model');
const APIError = require('../helpers/APIError');
const httpStatus = require('http-status');
const resPattern = require('../helpers/resPattern');
const AWS = require("aws-sdk");
const s3 = new AWS.S3();
const { Op, where} = require('sequelize');


const createOrder = async (req,res,next) => {
    try {
        const requestData = req.body;
        
        const file = req.files;

        if(file){
            requestData.qrcode = file.qrcode[0].location
            requestData.shoe_image = file.shoe_image[0].location
        }
        const result = await Order.create(requestData)
        const obj = resPattern.successPattern(httpStatus.OK,result,'success');
            return res.status(obj.code).json({
                ...obj
            });
    } catch (e) {
        console.log("e.",e);
        return next(new APIError(`${e.message}`,httpStatus.BAD_REQUEST,true));
    }
}

const getOrders = async (req,res,next) => {
    try {
        const limit = req.query.limit ? parseInt(req.query.limit) : 15;
        const offset = req.query.offset ? parseInt(req.query.offset) : 0;

        const result = await Order.findAndCountAll();
        const obj = resPattern.successPattern(httpStatus.OK,result,'success');
            return res.status(obj.code).json({
                ...obj
            });
    } catch (e) {
        return next(new APIError(`${e.message}`,httpStatus.BAD_REQUEST,true));
    }
}

const updateOrder = async(req,res,next) => {
    try {
        const id = req.params.id;
        const requestData = req.body;
        const result = await Order.update(requestData,{where : { unique_id : id}});
        const obj = resPattern.successPattern(httpStatus.OK,result,'success');
        return res.status(obj.code).json({
            ...obj
        });
    } catch (e) {
        return next(new APIError(`${e.message}`,httpStatus.BAD_REQUEST,true));
    }
}


const imageUpload = async (req,res,next) => {
    try {
        const file = req.file;
        console.log("file..",req.file);
        if(!file){
            const message = "File Not Found";
            return res.status(httpStatus.BAD_REQUEST).json({ error: { message } });
        }

        const resdata = {
            file : file.location
        }
        let obj = resPattern.successPattern(httpStatus.OK, resdata, 'success');
        return res.status(obj.code).json(obj);
    } catch (e) {
        return next(new APIError(`${e.message}`,httpStatus.BAD_REQUEST,true));
    }
}

module.exports = {
    createOrder,
    getOrders,
    updateOrder,
    imageUpload
}
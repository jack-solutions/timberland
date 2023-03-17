const {Sequelize, DataTypes}  = require('sequelize');
const sequelize = require('../config/db');
const moment = require('moment');   


const Order = sequelize.define('order',{
    unique_id : {
        type : DataTypes.BIGINT,
        allowNull : false,
        primaryKey : true,
        autoIncrement : true
    },
    consumer_can_collect : {
        type : DataTypes.BOOLEAN,
        defaultValue : true,
        allowNull : true
    }, 
    consumer_collected_show : {
        type : DataTypes.BOOLEAN,
        defaultValue : true,
        allowNull : true
    }, 
    contact_email : {
        type : DataTypes.STRING,
        // defaultValue : null,
        allowNull : true
    }, 
    first_name : {
        type : DataTypes.STRING,
        allowNull : true
    }, 
    last_name : {
        type : DataTypes.STRING,
        allowNull : true
    }, 
    marketing_optin : {
        type : DataTypes.BOOLEAN,
        defaultValue : true,
        allowNull : true
    },
    name : {
        type : DataTypes.STRING,
        allowNull : true
    }, 
    phone_number : {
        type : DataTypes.STRING,
        allowNull : true
    }, 
    privacy_opt_in : {
        type : DataTypes.BOOLEAN,
        defaultValue : true,
        allowNull : true
    },
    qrcode : {
        type : DataTypes.STRING,
        allowNull : true
    },
    shoe_detail : {
        type : DataTypes.STRING,
        allowNull : true
    },
    shoe_image : {
        type : DataTypes.STRING,
        allowNull : true
    },
    shoe_picked_up: {
        type : DataTypes.BOOLEAN,
        defaultValue : true,
        allowNull : true
    },
    store : {
        type : DataTypes.STRING,
        allowNull : true
    },
    store_user : {
        type : DataTypes.STRING,
        allowNull : true
    },
    test : {
        type : DataTypes.STRING,
        allowNull : true
    },
    // unique_id : {
    //     type : DataTypes.BIGINT,
    //     allowNull : false,
    //     // primaryKey : true,
    //     autoIncrement : true
    // },
    creator : {
        type : DataTypes.STRING,
        allowNull : true
    }, 
    modified_date : {
        type: DataTypes.DATE,
        defaultValue: moment.utc().format('YYYY-MM-DD HH:mm:ss'),
        allowNull: false,
        field : 'modified_date'
    },
    created_date : {
        type: DataTypes.DATE,
        defaultValue: moment.utc().format('YYYY-MM-DD HH:mm:ss'),
        allowNull: false,
        field : 'created_date'
    }, 
    slug : {
        type : DataTypes.STRING,
        allowNull : true
    }
});

module.exports = Order;
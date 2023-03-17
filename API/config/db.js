
const {Sequelize} = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize(process.env.DATABASENAME,process.env.DATABASE_USER,process.env.DATABASE_PASSWORD,{
  dialect: 'mysql',
  host : 'pos-database.cht4aywuljpc.eu-west-2.rds.amazonaws.com',
  pool: {
    max: 5,
    min: 1,
    acquire: 30000000,
    idle: 10000
  },
  define: {
    timestamps: false
  },
  dialectOptions:{
    connectTimeout : 600000
  }
});

sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch((err) => {
            console.log('Unable to connect to the database:', err);
        });

module.exports = sequelize;




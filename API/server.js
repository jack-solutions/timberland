const express = require('express');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());
const sequelize = require('./config/db');
const router = require('./index');
app.use('/api/',router);



app.listen(8080, () => {
    sequelize.sync().then(() => console.log('Successfully connected to DB')).catch(e => console.log(e));
    console.log(`server started on the port ${8080}`);
  });

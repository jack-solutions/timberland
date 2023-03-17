const router = require('express').Router();

const orderRoutes = require('./routes/order.Routes');

router.use('/order',orderRoutes);


module.exports = router;
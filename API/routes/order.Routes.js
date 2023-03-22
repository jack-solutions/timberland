const orderCtrl = require('../controller/order.controller');
const router = require('express').Router();
const {uploadS3} = require('../helpers/commonfile');

router.route('/create-order').post(uploadS3.fields([
    {name : "qrcode"},{name : "shoe_image"}
]),orderCtrl.createOrder);
router.route('/get-orders').get(orderCtrl.getOrders);
router.route('/get-order/:id').get(orderCtrl.findOne);
router.route('/update-order/:id').put(orderCtrl.updateOrder);
router.route('/delete-order/:id').delete(orderCtrl.deletUser);
router.route('/image-upload').post(uploadS3.single('image'),orderCtrl.imageUpload);



module.exports = router
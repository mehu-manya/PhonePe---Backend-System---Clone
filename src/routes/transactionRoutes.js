const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/protect');
const { sendMoney, getTransactionHistory } = require('../controllers/transactionController');

router.post('/send', protect, sendMoney);
router.get('/history', protect, getTransactionHistory);
// router.post('/send', protect,require('../controllers/transactionController').sendMoney);
// router.get('/history', protect, require('../controllers/transactionController').getTransactionHistory);

module.exports = router;
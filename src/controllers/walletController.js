const User = require('../models/User');
const Transaction = require('../models/Transaction');
const bcrypt = require('bcryptjs');

// @desc Pay bill using wallet
// @route POST /api/wallet/pay-bill
// @access Private

const addMoney = async (req, res) => {
    try{
        const { amount, mpin } = req.body;
        const userId = req.user._id;
        if(amount <= 0) {
            return res.status(400).json({ message: 'Amount must be greater than zero' });

        }
        const user = await User.findById(userId);
        if(!user){
            return res.status(404).json({ message: 'User not found' });
        }
        user.balance += amount;
        await user.save();

        const transaction = await Transaction.create({
            sender: user._id,
            receiver: user._id,
            amount,
            types: 'ADD_MONEY_WALLET',
            status: 'COMPLETED'
        });
        res.json({ message: 'Money added successfully', transaction });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const payBill = async (req, res) => {
    try{
        const { billerName, amount, mpin } = req.body;
        const userId = req.user._id;

        if(amount <= 0) {
            return res.status(400).json({ message: 'Amount must be grater than zero' });
        }
        if(!mpin){
            return res.status(400).json({ message: 'MPIN is required' });
        }
        const user = await User.findById(userId);
        if(!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const isMpinMatch = await bcrypt.compare(mpin, user.mpin);
        if(!isMpinMatch) {
            return res.status(401).json({ message: 'Invalid MPIN' });
        }
        if (user.balance < amount){
            return res.status(400).json({ message: 'Insufficient balance' });
        }
        user.balance -= amount;
        await user.save();
        const transaction = await Transaction.create({
            sender: user._id,
            receiver: user._id,
            amount,
            billerName,
            types: 'BILL_PAYMENT',
            status: 'COMPLETED'
        });
        res.json({ message: 'Bill paid successfully', transaction });
    } catch (error){
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = {
    payBill,
    addMoney
};
require('dotenv').config();

const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const User = require('./src/models/User');
const Transaction = require('./src/models/Transaction');

const DEMO_PASSWORD = 'Demo1234!';
const DEMO_MPIN = '1234';

const demoUsers = [
    { name: 'Aarav Sharma', email: 'aarav@example.com', phone: '9000000001', upiId: 'aarav@phonepe', balance: 12500 },
    { name: 'Diya Patel', email: 'diya@example.com', phone: '9000000002', upiId: 'diya@phonepe', balance: 8200 },
    { name: 'Kabir Singh', email: 'kabir@example.com', phone: '9000000003', upiId: 'kabir@phonepe', balance: 5400 },
];

async function seed() {
    if (!process.env.MONGO_URI) {
        throw new Error('MONGO_URI is missing. Add it to your .env file before running the seed script.');
    }

    await mongoose.connect(process.env.MONGO_URI);

    const password = await bcrypt.hash(DEMO_PASSWORD, 10);
    const mpin = await bcrypt.hash(DEMO_MPIN, 10);
    const users = [];

    for (const userData of demoUsers) {
        const user = await User.findOneAndUpdate(
            { email: userData.email },
            { $set: { ...userData, password, mpin } },
            { new: true, upsert: true, runValidators: true, setDefaultsOnInsert: true }
        );
        users.push(user);
    }

    const [aarav, diya, kabir] = users;
    const sampleTransactions = [
        { _id: new mongoose.Types.ObjectId('650000000000000000000001'), sender: aarav._id, receiver: diya._id, amount: 750, types: 'TRANSFER', status: 'COMPLETED', timestamp: new Date('2025-01-15T10:30:00Z') },
        { _id: new mongoose.Types.ObjectId('650000000000000000000002'), sender: diya._id, receiver: diya._id, amount: 2000, types: 'ADD_MONEY_WALLET', status: 'COMPLETED', timestamp: new Date('2025-01-16T08:15:00Z') },
        { _id: new mongoose.Types.ObjectId('650000000000000000000003'), sender: kabir._id, receiver: kabir._id, amount: 450, billerName: 'City Electricity', types: 'BILL_PAYMENT', status: 'COMPLETED', timestamp: new Date('2025-01-17T17:45:00Z') },
    ];

    for (const transaction of sampleTransactions) {
        await Transaction.updateOne({ _id: transaction._id }, { $setOnInsert: transaction }, { upsert: true });
    }

    console.log(`Seed complete: ${users.length} demo users and ${sampleTransactions.length} sample transactions.`);
    console.log(`Demo login password: ${DEMO_PASSWORD} | MPIN: ${DEMO_MPIN}`);
    console.log(`Demo emails: ${demoUsers.map(({ email }) => email).join(', ')}`);
}

seed()
    .catch((error) => {
        console.error('Seed failed:', error.message);
        process.exitCode = 1;
    })
    .finally(async () => {
        await mongoose.disconnect();
    });

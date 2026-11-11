require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db');
const swaggerUi = require('swagger-ui-express');
const authRoutes = require('./src/routes/authRoutes');


let swaggerDocument={};
try{
    swaggerDocument = require('./swagger-output.json');
}
catch(err){
    console.error('Error loading Swagger document:',err);
}



const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();
const port = process.env.PORT || 3000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// app.use("/api/transactions", require('./src/routes/transactionRoutes'));

app.get('/', (req, res) => {
    res.send('PhonePe Backend System is running!');
});

//user routes
app.use('/api/auth',authRoutes);
app.use("/api/transactions", require('./src/routes/transactionRoutes'));
app.use('/api/wallet', require('./src/routes/walletRoutes'));


//app/server start in that port
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
    // console.log(`Environment Variables: ${JSON.stringify(process.env)}`);
    console.log(`swagger Docs available at http://localhost:${port}/api-docs`);
});
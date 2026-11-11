# PhonePe Backend System Clone

A backend application inspired by digital payment platforms, developed using the MERN ecosystem. The project implements essential wallet and payment-related operations, including user registration, login, MPIN setup, adding money, bill payments, money transfers, and transaction history.

The main focus of this project is to understand how backend services handle user authentication, database operations, protected API routes, and financial transaction records.

## Features

### 1. User Authentication
- User registration with name, email, phone number, and password.
- Login using registered email and password.
- JWT-based authentication for protected routes.
- Retrieve the authenticated user's profile.

### 2. MPIN Management
- Set a four-digit MPIN.
- Hash the MPIN using bcryptjs before storing it.
- Use MPIN verification for transaction-related operations.

### 3. Wallet Management
- Add money to the user's wallet.
- Make bill payments using the wallet.
- Maintain wallet balance.

### 4. Money Transfers
- Transfer money to another registered user using their phone number.
- Verify the user's MPIN before processing a transfer.
- Store transaction details in MongoDB.

### 5. Transaction History
- Retrieve transaction records associated with the logged-in user.
- Display sender and receiver information using Mongoose population.

## Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime environment |
| Express.js | Backend framework and REST API development |
| MongoDB | Database |
| Mongoose | MongoDB object modeling |
| JWT | User authentication |
| bcryptjs | Password and MPIN hashing |
| Postman | API testing |
| Swagger UI | API documentation |

## Project Structure

```text
PhonePe-Backend-System/
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── transactionController.js
│   │   └── walletController.js
│   │
│   ├── middleware/
│   │   └── protect.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   └── Transaction.js
│   │
│   └── routes/
│       ├── authRoutes.js
│       ├── transactionRoutes.js
│       └── walletRoutes.js
│
├── postman/
│   └── PhonePe-Backend-API.postman_collection.json
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

## Getting Started

Follow the steps below to run the application on your local machine.

### Prerequisites

Make sure you have installed:

- Node.js
- MongoDB
- MongoDB Compass (optional, for database visualization)
- Postman
- Git

### 1. Clone the repository

```bash
git clone https://github.com/mehu-manya/PhonePe---Backend-System---Clone.git
```

### 2. Navigate to the project directory

```bash
cd PhonePe---Backend-System---Clone
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the root directory.

Add the following configuration:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/phonepe-BE-system-DEV
JWT_SECRET=your_secret_key
```

Replace the JWT secret with a secure private value. Use your own MongoDB connection string if your database is hosted elsewhere.

### 5. Start the backend server

```bash
npm run dev
```

Once the server starts successfully, the application will be available at:

```text
http://localhost:3000
```

Swagger API documentation:

```text
http://localhost:3000/api-docs
```

## API Endpoints

The following endpoints are included in the Postman collection.

### Authentication Routes

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Check server status |
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/profile` | Get user profile |
| POST | `/api/auth/set-mpin` | Set user MPIN |

### Transaction Routes

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/transactions/send` | Send money to another user |
| GET | `/api/transactions/history` | Get transaction history |

### Wallet Routes

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/wallet/add-money` | Add money to wallet |
| POST | `/api/wallet/pay-bill` | Pay a bill using wallet |

**Authentication:** Protected endpoints require a JWT access token in the Authorization header.

```text
Authorization: Bearer <your_token>
```

## API Testing Using Postman

A Postman collection is included in the `postman/` directory.

It contains requests organized into three groups:

- Auth Routes
- Transaction Routes
- Wallet Routes

### Steps to test the APIs

1. Open Postman.
2. Import the JSON collection from the `postman/` directory.
3. Configure the `base_Url` variable as `http://localhost:3000`.
4. Start the backend server.
5. Register a user and log in.
6. Copy the JWT token returned by the login API.
7. Set the token variable in Postman.
8. Use the authenticated requests to test wallet and transaction operations.

## Database

MongoDB is used to store user and transaction information.

The application uses Mongoose schemas to define the data structure and interact with the database.

**User Model**
- Name
- Email
- Phone number
- Hashed password
- UPI ID
- Wallet balance
- Hashed MPIN
- Created and updated timestamps

**Transaction Model**

Stores transaction-related information such as sender, receiver, amount, transaction type, status, and timestamp, according to the transaction schema.

## What I Learned

Working on this project helped me understand:

- How to structure a backend application using Node.js and Express.js.
- How REST APIs handle client requests and server responses.
- How to connect MongoDB with a backend application using Mongoose.
- How JWT authentication and middleware protect private routes.
- How bcryptjs can be used to hash passwords and MPINs.
- How to manage wallet-related operations and transaction records.
- How to test APIs using Postman and debug backend issues.

## Future Improvements

- Develop a frontend using React.js.
- Integrate a payment gateway in a sandbox environment.
- Implement stronger transaction validation and security.
- Add automated API and integration testing.
- Improve transaction handling with database transactions.

## Disclaimer

This project is developed for educational and learning purposes. It is an independent implementation inspired by digital payment applications and is not affiliated with or endorsed by PhonePe. It does not represent an official PhonePe service or process real UPI payments.

## Author

**Mehu Manya**

GitHub: [mehu-manya](https://github.com/mehu-manya)
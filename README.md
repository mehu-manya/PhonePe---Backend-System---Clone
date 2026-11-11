# PhonePe Backend System Clone

A backend application inspired by digital payment platforms, built using Node.js, Express.js, and MongoDB. The project covers common wallet and payment-related operations, including user registration, login, MPIN setup, adding money, bill payments, money transfers, and transaction history.

The project focuses on understanding backend development, REST API design, authentication, database management, and handling transaction-related operations.

## Features

### 1. User Authentication
- User registration with name, email, phone number, and password.
- Login using registered email and password.
- JWT-based authentication for protected routes.
- Retrieve the authenticated user's profile.

### 2. MPIN Management
- Set a four-digit MPIN.
- Hash the MPIN using bcryptjs before storing it.
- Verify MPIN for transaction-related operations.

### 3. Wallet Management
- Add money to the user's wallet.
- Make bill payments using the wallet balance.
- Maintain wallet balance.

### 4. Money Transfers
- Transfer money to another registered user using their phone number.
- Verify MPIN before processing a transfer.
- Store transaction details in MongoDB.

### 5. Transaction History
- Retrieve transaction records associated with the logged-in user.
- Display sender and receiver details using Mongoose population.

## Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
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
│   └── Phonepe - MERN - BackEnd.postman_collection.json
│
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
├── swagger-output.json
└── README.md
```

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have installed:

- Node.js
- MongoDB
- MongoDB Compass (optional)
- Postman
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/mehu-manya/PhonePe---Backend-System---Clone.git
```

### 2. Navigate to the Project Directory

```bash
cd PhonePe---Backend-System---Clone
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory and add:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/phonepe-BE-system-DEV
JWT_SECRET=your_secret_key
```

Replace the JWT secret with your own secure value. If you are using MongoDB Atlas, provide your Atlas connection string instead.

### 5. Start the Server

```bash
npm run dev
```

Once the server starts, the backend will be available at:

**Base URL:** `http://localhost:3000`

**Swagger Documentation:** `http://localhost:3000/api-docs`

## API Endpoints

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
| GET | `/api/transactions/history` | Retrieve transaction history |

### Wallet Routes

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/wallet/add-money` | Add money to wallet |
| POST | `/api/wallet/pay-bill` | Pay a bill using wallet balance |

### Authentication

Protected API routes require a JWT token in the Authorization header.

```text
Authorization: Bearer <your_token>
```

## API Testing Using Postman

A Postman collection is included in the `postman/` directory for testing the backend APIs.

The collection contains three groups of requests:

- Auth Routes
- Transaction Routes
- Wallet Routes

### Steps to Test the APIs

1. Open Postman.
2. Import the JSON collection from the `postman/` directory.
3. Set the `base_Url` variable to `http://localhost:3000`.
4. Start the backend server.
5. Register a new user using the registration API.
6. Log in and copy the JWT token from the response.
7. Set the token variable in Postman.
8. Use the authenticated requests to test wallet and transaction operations.

The collection can also be imported directly from the JSON file available in this repository.

## Database

MongoDB is used to store user details and transaction records. Mongoose schemas are used to define the structure of the documents.

### User Model

Stores information such as:

- Name
- Email
- Phone number
- Hashed password
- UPI ID
- Wallet balance
- Hashed MPIN
- Created and updated timestamps

### Transaction Model

Stores transaction-related information, including sender, receiver, amount, transaction type, status, and timestamp, according to the transaction schema.

## What I Learned

While developing this project, I gained practical experience with:

- Structuring a backend application using Node.js and Express.js.
- Creating and handling REST APIs.
- Connecting MongoDB with Node.js using Mongoose.
- Implementing JWT authentication and protected routes.
- Hashing passwords and MPINs using bcryptjs.
- Managing wallet operations and transaction records.
- Testing API requests using Postman.
- Debugging backend errors and handling server responses.

## Future Improvements

- Develop a frontend using React.js.
- Integrate a payment gateway in a sandbox environment.
- Implement stronger transaction validation and security.
- Add automated API and integration testing.
- Improve transaction handling using database transactions.

## Disclaimer

This project is developed for educational and learning purposes. It is an independent implementation inspired by digital payment applications and is not affiliated with or endorsed by PhonePe. It does not represent an official PhonePe service or process real UPI payments.

## Author

**Mehu Manya**

GitHub: [mehu-manya](https://github.com/mehu-manya)
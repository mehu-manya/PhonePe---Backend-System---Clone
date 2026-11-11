# PhonePe Backend System Clone

A backend project inspired by the core functionalities of digital payment applications like PhonePe. This project focuses on user authentication, MPIN verification, wallet management, money transfers, and transaction history.

The application is developed using Node.js, Express.js, and MongoDB, with JWT-based authentication to manage protected routes.

## Features

- **User Registration:** Allows new users to create an account using their name, email, and phone number.
- **User Login:** Authenticates registered users and generates a JWT token for secure access.
- **JWT Authentication:** Protects private API routes by verifying the user's authentication token.
- **MPIN Setup:** Allows users to configure a four-digit MPIN for transaction verification.
- **Wallet Management:** Supports adding money to the user's wallet.
- **Money Transfer:** Implements money transfers between registered users.
- **Transaction History:** Retrieves transaction records associated with the logged-in user.
- **User Profile:** Provides access to the authenticated user's profile information.

## Tech Stack

**Backend**
- Node.js
- Express.js

**Database**
- MongoDB
- Mongoose

**Authentication & Security**
- JSON Web Token (JWT)
- bcryptjs

**Development Tools**
- Visual Studio Code
- Postman
- MongoDB Compass
- Nodemon
- Swagger UI

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
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md
```

## Getting Started

Follow these steps to run the project locally.

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

Create a `.env` file in the root directory and add the following:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Replace the database connection string and JWT secret with your own values.

### 5. Start the server

For development:

```bash
npm run dev
```

For normal execution:

```bash
npm start
```

The server should run at:

```text
http://localhost:3000
```

Swagger API documentation:

```text
http://localhost:3000/api-docs
```

## API Testing

The APIs were tested using Postman.

The main functionalities include:

| Module | Functionality |
|---|---|
| Authentication | Register and Login |
| User | Get User Profile |
| MPIN | Set MPIN |
| Wallet | Add Money |
| Transactions | Send Money |
| Transactions | View Transaction History |

Refer to the Swagger documentation for the available API definitions.

## Learning Outcomes

While developing this project, I worked on:

- Building REST APIs using Express.js.
- Connecting MongoDB with a Node.js application using Mongoose.
- Implementing JWT-based authentication and protected routes.
- Working with password and MPIN hashing using bcryptjs.
- Handling wallet operations and transaction records.
- Testing API requests and debugging backend errors.

## Future Improvements

- Add frontend integration using React.js.
- Implement payment gateway integration.
- Improve transaction security and validation.
- Add transaction limits and better error handling.
- Introduce unit and integration testing.

## Disclaimer

This project is developed for learning and educational purposes. It is an independent backend implementation inspired by digital payment applications. It is not affiliated with or endorsed by PhonePe.

## Author

**Mehu Manya**

B.Tech – Electronics and Communication Engineering

GitHub: https://github.com/mehu-manya
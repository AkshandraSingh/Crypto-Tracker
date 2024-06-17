# Crypto-Tracker 💸

Crypto-Tracker is a Node.js application built with Express.js that allows users to create an account, log in, and track cryptocurrency details using the CoinGecko API. This project also uses JWT for secure authentication.

## Features

- **User Registration**: Create a new account with a unique username and password.
- **User Login**: Securely log in with your credentials to access the application.
- **Crypto Details**: Fetch and display details about various cryptocurrencies.

## Technologies Used

- **Node.js**: JavaScript runtime for building the backend.
- **Express.js**: Web framework for Node.js.
- **JWT (JSON Web Tokens)**: Secure user authentication.
- **MongoDB**: NoSQL database for storing user data.
- **CoinGecko API**: Fetch cryptocurrency data.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/crypto-tracker.git
   cd crypto-tracker
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following:

   ```plaintext
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Start the server:**

   ```bash
   npm start
   ```

   The server will start on `http://localhost:3000`.

## API Endpoints

### User Registration

- **URL**: `/api/register`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "username": "yourusername",
    "password": "yourpassword"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "User registered successfully"
  }
  ```

### User Login

- **URL**: `/api/login`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "username": "yourusername",
    "password": "yourpassword"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "token": "your_jwt_token"
  }
  ```

### Get Crypto Details

- **URL**: `/api/crypto/:userId/:coinName`
- **Method**: `GET`
- **Response**:
  ```json
  {
    "success": true,
    "cryptoData": {
      // Cryptocurrency details from CoinGecko API
    }
  }
  ```

## Example Usage

1. **Register a new user**:

   ```bash
   Request POST http://localhost:3000/api/register
   ```

2. **Log in with the registered user**:

   ```bash
   Request POST http://localhost:3000/api/login
   ```

3. **Get cryptocurrency details**:
   ```bash
   Request GET http://localhost:3000/api/crypto/userId/bitcoin
   ```

## Contributing

Contributions are welcome! Please fork this repository and submit pull requests.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [JWT](https://jwt.io/)
- [CoinGecko API](https://www.coingecko.com/en/api)
- [MongoDB](https://www.mongodb.com/)

---

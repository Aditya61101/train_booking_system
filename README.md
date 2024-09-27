# Railway Management System

A Railway Management System designed to allow users to check train availability, book seats, and manage trains. The system supports role-based access for admins and users, ensuring secure and efficient operations.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Database Initialization](#database-initialization)

## Features

- **User Registration**: Users can register and create an account.
- **User Login**: Secure login for users to access their accounts.
- **Admin Functionality**: Admins can add new trains and manage train data.
- **Check Train Availability**: Users can check for trains between two stations.
- **Seat Booking**: Users can book seats if available.
- **Booking Details**: Users can view specific booking details.
- **Rate Limiting**: Protects the API from excessive requests.
- **Caching with Redis**: Improves performance by caching train availability.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Caching**: Redis
- **Middleware**: Compression, CORS, Rate Limiting
- **Environment Variables**: dotenv

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd railway-management-system
2. Install dependencies:

   ```bash
   npm install
3. Create a `.env` file in the root directory and add the following environment variables:

   ```bash
    ADMIN_API_KEY="add-your-key"
    JWT_SECRET="add-your-secret"
    JWT_EXPIRES_IN="1d"
4. Ensure you have MySQL/PostgreSQL and Redis installed and running on your machine.

5. **Install Redis**:
   - For Windows, you can use [Docker](https://docs.docker.com/get-started/) or [WSL](https://docs.microsoft.com/en-us/windows/wsl/install).

6. **Run Redis**:
   - If using Docker, run the following command:
     ```bash
     docker run --name redis -d -p 6379:6379 redis
     ```
   - If using WSL, follow the instructions for starting Redis on Ubuntu.

## Usage
1. Start the server:

   ```bash
   npm start

2. The server will start on `http://localhost:5000`.

3. Initialize the database:

   ```bash
   npm run init-db

## API Endpoints
 - POST /api/v1/auth/register: Register a new user.
 - POST /api/v1/auth/login: Log in a user.
 - POST /api/v1/trains: (Admin) Add a new train.
 - GET /api/v1/trains: Get available trains between two stations.
 - POST /api/v1/booking: Book a seat on a specific train.
 - GET /api/v1/booking/: Get specific booking details.

## Database Initialization
The createTable.js script initializes the database and creates necessary tables. 
Run the following command to execute it:

    npm run init-db
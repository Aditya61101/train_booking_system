import db from './config/db'; // Your database connection

const MAX_RETRIES = 5; // Maximum number of retry attempts
const RETRY_DELAY = 2000; // Delay between retries in milliseconds

const initializeDatabase = async (retries = MAX_RETRIES) => {
    try {
        // Check the database connection
        await db.getConnection();
        console.log('Database connected successfully');

        const createUsersTable = `
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(255) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL,
                role ENUM('admin', 'user') DEFAULT 'user',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;

        const createTrainsTable = `
            CREATE TABLE IF NOT EXISTS trains (
                id INT AUTO_INCREMENT PRIMARY KEY,
                source VARCHAR(255) NOT NULL,
                destination VARCHAR(255) NOT NULL,
                total_seats INT NOT NULL,
                available_seats INT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                UNIQUE(source, destination)
            )
        `;

        await db.execute(createUsersTable);
        await db.execute(createTrainsTable);

        // Seed initial data
        const [rows] = await db.execute('SELECT * FROM users WHERE username = ?', ['admin']);
        if (rows.length === 0) {
            await db.execute('INSERT INTO users (username, password, role) VALUES (?, ?, ?)', ['admin', 'adminpassword', 'admin']);
        }

        await db.execute('INSERT IGNORE INTO trains (source, destination, total_seats, available_seats) VALUES (?, ?, ?, ?)', 
        ['Station A', 'Station B', 100, 100]);

        console.log('Database initialized and seeded successfully');
    } catch (err) {
        if (retries > 0) {
            console.log(`Database connection failed. Retrying in ${RETRY_DELAY / 1000} seconds...`);
            setTimeout(() => initializeDatabase(retries - 1), RETRY_DELAY);
        } else {
            console.error('Error initializing database:', err);
        }
    } finally {
        db.end();
    }
};

initializeDatabase();
import mysql2 from "mysql2";

const pool = mysql2.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "railway",
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

pool.getConnection((err, connection) => {
    if (err) {
        console.error("Error connecting to the database:", err.message);
    } else {
        console.log("Database connected successfully.");
        connection.release();
    }
});

export default pool.promise();
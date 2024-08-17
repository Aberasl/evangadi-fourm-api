const mysql2 = require("mysql2");
require("dotenv").config();

const dbConnection = mysql2.createPool({
  host: process.env.HOST,
  port: parseInt(process.env.PORT, 10),
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  connectionLimit: 10, // Number of connections to create in the pool
});

// Test the connection
dbConnection.execute("SELECT 1", (err, result) => {
  if (err) {
    console.error("Database connection error:", err.message);
  } else {
    console.log("Test query result:", result);
  }
});

module.exports = dbConnection.promise();

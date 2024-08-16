const mysql2 = require("mysql2");
require("dotenv").config();

const dbConnection = mysql2.createPool({
  host: process.env.HOST || "localhost", // Default to 'localhost' if not set
  port: parseInt(process.env.PORT, 10) || 3306, // Default to 3306 if not set; ensure PORT is a number
  user: process.env.USER || "root",
  password: process.env.PASSWORD || "",
  database: process.env.DATABASE || "mydatabase",
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

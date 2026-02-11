// Load environment variables
require("dotenv").config();

// Import the pool from your db.js
const db = require("./config/db"); // Make sure the path is correct

// Test function
async function testConnection() {
  try {
    // Simple query to test connection
    const [rows] = await db.query("SELECT NOW() AS currentTime");
    console.log("✅ Database connected successfully!");
    console.log("Server time:", rows[0].currentTime);
    process.exit(0);
  } catch (error) {
    console.error("❌ Database connection failed!");
    console.error(error.message);
    process.exit(1);
  }
}

// Run test
testConnection();

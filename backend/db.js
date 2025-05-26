const mysql = require('mysql2/promise');
const dotenv = require('dotenv')

dotenv.config()

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: process.env.MY_PASSWORD,
  database: 'chat_journal'
});

module.exports = pool;

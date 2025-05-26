const mysql = require('mysql2/promise');
const dotenv = require('dotenv')

dotenv.config()

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MY_PASSWORD,
  database: process.env.MYSQL_DBNAME
});

module.exports = pool;

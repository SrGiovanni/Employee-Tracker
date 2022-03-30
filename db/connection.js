const mysql = require('mysql2');
require('dotenv').config()

/* 
process.env.DB_NAME
process.env.DB_USER
process.env.DB_PASSWORD */

const connection = mysql.createConnection(
    {
      host: 'localhost',
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: 'epmTracker'
    }
);

const db = connection.promise();

module.exports = db;
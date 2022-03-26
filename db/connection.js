const mysql = require('mysql2');
require('dotenv').config();

/* 
process.env.DB_NAME
process.env.DB_USER
process.env.DB_PASSWORD */

const connection = mysql.createConnection(
    {
      host: 'localhost',
      password: env.DB_PASSWORD,
      dialect: 'mysql',

    }
);

const db = connection.promise();

module.exports = db;
const mysql = require('mysql2');
const { DB_PASSWORD, DB_USER} = require('../mySQL_server_config');
/* 
process.env.DB_NAME
process.env.DB_USER
process.env.DB_PASSWORD */

const connection = mysql.createConnection(
    {
      host: 'localhost',
      user: DB_USER,
      password: DB_PASSWORD,
      database: 'epmTracker'
    }
);

const db = connection.promise();

module.exports = db;
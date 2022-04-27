const mysql = require('mysql2');

//connect to database
const db = mysql.createConnection(
    {
    host: 'localhost',
    //SQL username
    user: 'root',
    //SQL password
    password: 'Desdavon1713!',
    database: 'election'
    },
    console.log('Connected to the election database')
);

//exports 
module.exports = db;
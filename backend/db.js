const mysql = require('mysql2/promise')

const database = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'computing',
    waitForConnections: true
})

module.exports = database
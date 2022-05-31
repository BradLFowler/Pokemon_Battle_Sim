const mysql = require('mysql2')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

// need to be able to at least change your name and password
// as well as view your account info
const greetUsers = (req, res) => {
    res.send('hi users')
}

const usersInfo = (req, res) => {

    let sql = "SELECT * FROM users WHERE username = ?"
    mysql.format(sql, [req.params.username])

    pool.query(sql, (err, rows) => {
        if(err) return handleSQLError(res, rows)
        return res.send(rows)
    })
}


module.exports = {
    greetUsers,
    usersInfo,
    // changeUName,
    // changePassword
}
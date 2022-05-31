const mysql = require('mysql2')
// needs jwt
const argon2 = require('argon2')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

// signup func
const signup = (req, res) => {

    const { username, password } = req.body
    let sql = "INSERT INTO users(username, password, created_at) VALUES (?, ?, ?)"

    const hash = argon2.hash(password)

    sql = mysql.format(sql, [username, hash, new Date().toISOString()])

    pool.query(sql, (err, rows) => {
        if(err) {

            if(err.code === 'ER_DUP_ENTRY') return res.status(409).send('Username is taken')
            return handleSQLError(res, err)
        }

        return res.send('Sign-up successful')
    })
    
}

// login func
const login = (req, res) => {

    const { username, password } = req.body
    let sql = "SELECT * FROM users WHERE username = ?"
    sql = mysql.format(sql, [username])

    if(argon2.verify(hash, password)) {
        // passwords match
    } else {
        // passwords did not match
    }

    // save user token
}

module.exports = {
    signup,
    login
}
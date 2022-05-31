const mysql = require('mysql2')
const pool = require('../sql/connection')
const argon2 = require('argon2')
const { handleSQLError } = require('../sql/error')


const greetUsers = (req, res) => {

    res.send('Users Page')
}

const usersInfo = (req, res) => {

    let sql = "SELECT * FROM users WHERE username = ?"
    sql = mysql.format(sql, [req.params.username])

    pool.query(sql, (err, rows) => {
        if(err) return handleSQLError(res, err)
        return res.send(rows)
    })
}

const changeUName = (req, res) => {

    const { username } = req.body

    let sql = "UPDATE users SET username = ? WHERE username = ?"
    sql = mysql.format(sql, [username, req.params.username])

    pool.query(sql, (err, rows) => {
        if(err) return handleSQLError(res, err)
        return res.send(`Changed Username to:${username}`)
    })
}

const changePassword = (req, res) => {

    const { password } = req.body

    const hash = argon2.hash(password)

    let sql = "UPDATE users SET password = ? WHERE username = ?"
    sql = mysql.format(sql, [hash, req.params.password])

    pool.query(sql, (err, rows) => {
        if(err) return handleSQLError(res, rows)
        return res.send(`Changed Password`)
    })
}


module.exports = {
    greetUsers,
    usersInfo,
    changeUName,
    changePassword
}
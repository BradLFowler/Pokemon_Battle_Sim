const mysql = require('mysql2')
const pool = require('../sql/connection')
const argon2 = require('argon2')
const { handleSQLError } = require('../sql/error')


const greetUsers = (req, res) => {

    res.send('Users Page')
}

const usersInfo = (req, res) => {

    const { password } = req.body

    let sql = "SELECT * FROM users WHERE username = ?"
    sql = mysql.format(sql, [req.params.username])

    pool.query(sql, (err, results) => {
        if(err) return handleSQLError(results, err)
        results[0].password = password
        return res.send(results)
    })
}

const changeUName = (req, res) => {

    const { username } = req.body

    let sql = "UPDATE users SET username = ? WHERE username = ?"
    sql = mysql.format(sql, [username, req.params.username])

    pool.query(sql, (err, results) => {
        if(err) return handleSQLError(results, err)
        return res.send(`Changed Username to:${username}`)
    })
}

const changePassword = async (req, res) => {

    const { password } = req.body

    const hash = await argon2.hash(password, {type: argon2.argon2i})

    let sql = "UPDATE users SET password = ? WHERE username = ?"
    sql = mysql.format(sql, [hash, req.params.username])

    pool.query(sql, (err, results) => {
        if(err) return handleSQLError(results, err)
        return res.send(`Changed Password`)
    })
}

const deleteUser = (req, res) => {

    const { username } = req.body

    let sql = "DELETE FROM users WHERE username = ?"
    sql = mysql.format(sql, [username])

    pool.query(sql, (err, results) => {
        if(err) return handleSQLError(results, err)
        return res.send(username + " Has Been Deleted")
    })

}

module.exports = {
    greetUsers,
    usersInfo,
    changeUName,
    changePassword,
    deleteUser
}
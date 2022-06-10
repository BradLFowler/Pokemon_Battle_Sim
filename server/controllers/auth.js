const mysql = require('mysql2')
const jwt = require('jsonwebtoken')
const argon2 = require('argon2')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')
require('dotenv').config()

// signup func
const signup = async (req, res) => {

    const date = new Date()

    const { username, password} = req.body

    let sql = "INSERT INTO users(username, password, created_at) VALUES (?, ?, ?)"

    try {

        const hash = await argon2.hash(password, {type: argon2.argon2i})
        sql = mysql.format(sql, [username, hash, date])
        
        // need to make sure users can't have the same name !!!
        pool.query(sql, async (err, results) => {

            if(err) {
                if(err.code === "ER_DUP_ENTRY") return res.status(409).send('Username is taken')
                return handleSQLError(results, err)
            }
            return res.send(`Thanks for Signing Up ${username}`)
        })
    } 
    catch(err) {
       res.send(err) 
    }
}

// login func
const login = (req, res) => {

    const { username, password} = req.body

    let sql = "SELECT * FROM users WHERE username = ?"
    sql = mysql.format(sql, [username])


    try {
        pool.query(sql, async (err, results) => {
            
            if(err) return handleSQLError(results, err)

            if(!results.length) return res.status(404).send("No matching users")
            
            if (await argon2.verify(results[0].password, password, {type: argon2.argon2i})) {
                const data = {...results[0]}
                
                const token = jwt.sign(data, process.env.TOKEN_SECRET, {expiresIn: "4h"})
                res.json({
                    msg: "Logged in " + username,
                    token
                })
            } else {
                res.send("Invalid Password Please Try Again")
            // passwords did not match
            }
                
        })
    }
    catch(err) {
        res.send(err)
    }
    // save user token
}

module.exports = {
    signup,
    login
}
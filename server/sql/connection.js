const mysql = require('mysql2');
require('dotenv').config()

const host = process.env.HOST
const user = process.env.USER
const password = process.env.PASSWORD
const db = process.env.DATABASE

class Connection {
    constructor() {
        if (!this.pool) {
            console.log('creating mysql connection...')
      
            const config = {
              connectionLimit: 100,
              host: "localhost",
              user: "root",
              password: "Rub!xSk803",
              database: "poke_dev"
            }
      
            this.pool = mysql.createPool(config)
      
            return this.pool
          }
      
          return this.pool
    }
}

const instance = new Connection()

module.exports = instance
const mysql = require('mysql2');

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
              host: host,
              user: user,
              password: password,
              database: db
            }
      
            this.pool = mysql.createPool(config)
      
            return this.pool
          }
      
          return this.pool
    }
}

const instance = new Connection()

module.exports = instance
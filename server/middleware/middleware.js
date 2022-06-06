const jwt = require('jsonwebtoken')
require('dotenv').config()

const logger = (req, res, next) => {
  console.log(`${req.originalUrl} ${new Date().toISOString()}`)
  next()
}

const authenticate = (req, res, next) => {
  const header = req.headers['authorization'] || ''
  const [ bearer, token ] = header.split(' ')

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET)
    req.user = decoded
    next()
  } catch(err) {
    res.sendStatus(401)
  }
}

module.exports = {
  authenticate,
  logger
}
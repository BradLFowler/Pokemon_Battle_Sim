const express = require('express')
const usersController = require('../controllers/users')
const router = express.Router()

router.get('/', usersController.greetUsers)

router.get('/:username', usersController.usersInfo)

// router.put('/:username', usersController.changeUName)

// router.put('/:password', usersController.changePassword)

module.exports = router
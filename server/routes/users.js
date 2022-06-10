const express = require('express')
const usersController = require('../controllers/users')
const { authenticate } = require('../middleware/middleware')
const router = express.Router()

router.get('/', usersController.greetUsers)

router.get('/:username', authenticate, usersController.usersInfo)

router.put('/username/:username', authenticate, usersController.changeUName)

router.put('/password/:username', authenticate, usersController.changePassword)

router.delete('/delete', authenticate, usersController.deleteUser)

module.exports = router
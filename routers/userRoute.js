const express = require('express')

const userController = require('../controllers/userController')

const userRouter = express.Router()

userRouter.post('/createUser', userController.createUser)
userRouter.post('/loginUser', userController.loginUser)

module.exports = userRouter

const express = require('express')

const userRoute = require('./routers/userRoute')

const commonRouter = express.Router()

commonRouter.use('/user', userRoute)

module.exports = commonRouter

const express = require('express')

const userRoute = require('./routers/userRoute')
const cryptoRoute = require('./routers/cryptoRoute')

const commonRouter = express.Router()

commonRouter.use('/user', userRoute)
commonRouter.use('/crypto', cryptoRoute)

module.exports = commonRouter

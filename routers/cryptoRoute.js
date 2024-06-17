const express = require('express')

const cryptoController = require('../controllers/cryptoController')

const cryptoRouter = express.Router()

cryptoRouter.get('/getCryptoDetails/:userId/:coinName', cryptoController.getCryptoDetails)

module.exports = cryptoRouter

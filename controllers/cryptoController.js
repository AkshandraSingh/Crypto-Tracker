const userModel = require('../models/userModel')

module.exports = {
    getCryptoDetails: async (req, res) => {
        try {
            const { userId, coinName } = req.params
            const userData = await userModel.findById(userId)
            if (!userData) {
                return res.status(401).send({
                    success: false,
                    message: "User not found",
                })
            }
            const url = `https://api.coingecko.com/api/v3/coins/${coinName}`
            console.log(url)
            const response = await fetch(url)
            const cryptoData = await response.json();
            if (!response.ok) {
                return res.status(401).send({
                    success: false,
                    message: "Failed to fetch response",
                    error: cryptoData
                })
            }
            res.status(200).send({
                success: true,
                cryptoData: cryptoData,
            })
        } catch (error) {
            res.status(500).send({
                success: false,
                message: "Server error",
                error: error.message,
            })
        }
    },
}

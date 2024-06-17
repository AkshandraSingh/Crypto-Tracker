const bcrypt = require('bcrypt')

const userModel = require('../models/userModel')

module.exports = {
    createUser: async (req, res) => {
        try {
            const userData = new userModel(req.body)
            const isUserExist = await userModel.findOne({
                userEmail: userData.userEmail
            })
            const bcryptPassword = await bcrypt.hash(userData.userPassword, 10)
            if (isUserExist) {
                return res.status(400).send({
                    success: false,
                    message: "User already exist"
                })
            }
            userData.userPassword = bcryptPassword
            await userData.save()
            res.status(200).send({
                success: true,
                message: "User created successfully",
            })
        } catch (error) {
            res.status(500).send({
                success: false,
                message: "Server error",
                error: error.message
            })
        }
    },
}

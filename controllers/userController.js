const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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
            res.status(202).send({
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

    loginUser: async (req, res) => {
        try {
            const { userEmail, userPassword } = req.body;
            const isUserExist = await userModel.findOne({ userEmail: userEmail });
            if (!isUserExist) {
                return res.status(400).send({
                    success: false,
                    message: "User does not exist"
                });
            }
            const isPasswordMatch = await bcrypt.compare(userPassword, isUserExist.userPassword);
            if (!isPasswordMatch) {
                return res.status(400).send({
                    success: false,
                    message: "Password does not match"
                });
            }
            const userPayload = isUserExist.toObject(); // Convert to plain object
            const token = await jwt.sign(userPayload, process.env.SECRET_KEY, { expiresIn: '1h' });
            res.status(200).send({
                success: true,
                message: "User logged in successfully",
                accessToken: token
            });
        } catch (error) {
            res.status(500).send({
                success: false,
                message: "Server error",
                error: error.message
            });
        }
    },
}

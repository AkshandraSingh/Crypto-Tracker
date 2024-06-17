const mongoose = require('mongoose')

const userModel = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true,
        unique: true
    },
    userPassword: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
})

userModel.set('timestamps', true)

module.exports = mongoose.model('user', userModel)

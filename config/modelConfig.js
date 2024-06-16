const mongoose = require('mongoose')

mongoose.connect(process.env.URL)

mongoose.connection.on('error', (error) => {
    console.log("Mongoose Error")
    console.log("Mongoose Error: ", error)
})
mongoose.connection.on('connected', () => {
    console.log("Mongoose is connected!")
})
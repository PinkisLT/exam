const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const userSchema = new Schema({

    age: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true

    },
    password: {
        type: String,
        required: true

    },
    email : {
        type: String,
        required: true

    }
})

const user = mongoose.model("userModel", userSchema)

module.exports = user
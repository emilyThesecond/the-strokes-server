const mongoose = require('mongoose')

const Schema = mongoose.Schema

const songSchema = new Schema({
    title: String,
    duration: String,
    album: {
        type: String
    },
    songUrl: String,

})

module.exports = mongoose.model("Song", songSchema)
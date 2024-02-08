const mongoose = require('mongoose')

const Schema = mongoose.Schema

const songSchema = new Schema({
    title: String,
    duration: String,
    album: {
        type: Schema.Types.ObjectId,
        ref: 'Album'
    },
    songUrl: String
})

module.exports = mongoose.model("Song", songSchema)
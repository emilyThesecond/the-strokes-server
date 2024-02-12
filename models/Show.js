const mongoose = require('mongoose')

const Schema = mongoose.Schema

const setSchema = new Schema({
    title: String,
    
})


const showSchema = new Schema({
    venue: String,
    set: [setSchema],
    startTime: String,
    endTime: String,
    opener: String
})

module.exports = mongoose.model("Show", showSchema)
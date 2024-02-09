const mongoose = require('mongoose')

const Schema = mongoose.Schema

const setSchema = new Schema({
    songs: [{
        type: Schema.Types.ObjectId,
        ref: 'Song'
    }]
    
})


const showSchema = new Schema({
    venue: {
        type: Schema.Types.ObjectId,
        ref: 'Venue'
    },
    set: setSchema,
    startTime: String,
    endTime: String,
    opener: String
})

module.exports = mongoose.model("Show", showSchema)
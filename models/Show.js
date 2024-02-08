const mongoose = require('mongoose')

const Schema = mongoose.Schema

const showSchema = new Schema({
    venue: {
        type: Schema.Types.ObjectId,
        ref: 'Venue'
    },
    setList: {
        type: Schema.Types.ObjectId,
        ref: 'SetList'
    },
    startTime: String,
    endTime: String,
    opener: String
})

module.exports = mongoose.model("Show", showSchema)
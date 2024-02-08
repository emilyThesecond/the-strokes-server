const mongoose = require('mongoose')

const Schema = mongoose.Schema

const albumSchema = new Schema({
    title: String,
    releaseDate: String,
    image: String,
    songs: [{
        type: Schema.Types.ObjectId,
        ref: 'Song'
    }]
})

module.exports = mongoose.model("Venue", venueSchema)
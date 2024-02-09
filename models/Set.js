const mongoose = require('mongoose')

const Schema = mongoose.Schema

const setSchema = new Schema({
    songs: [{
        type: Schema.Types.ObjectId,
        ref: 'Song'
    }]
    
})

module.exports = mongoose.model("Set", setSchema)
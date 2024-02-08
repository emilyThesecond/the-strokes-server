const mongoose = require('mongoose')

const Schema = mongoose.Schema

const setListSchema = new Schema({
    songs: [{
        type: Schema.Types.ObjectId,
        ref: 'Song'
    }]
    
})

module.exports = mongoose.model("SetList", setListSchema)
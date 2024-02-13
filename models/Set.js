const mongoose = require('mongoose')

const Schema = mongoose.Schema

const setSchema = new Schema({
    // songs: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Song'
    // }]
    title: String
    
})

module.exports = mongoose.model("Set", setSchema)
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema({
    entry: {
        type: String,
    }
  }, {
    timestamps: true
  })
const boardSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    post: [postSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('Board', boardSchema)
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema({
    entry: {
        type: String,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
  }, {
    timestamps: true
  })

const boardSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    posts: [postSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('Board', boardSchema)
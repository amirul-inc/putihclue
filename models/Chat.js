const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ChatSchema = new Schema({
    convertationId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    body: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now
    }

})
module.exports = mongoose.model('Chat', ChatSchema)
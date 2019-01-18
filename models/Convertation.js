const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ConvertationSchema = new Schema({
    participants: {
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
module.exports = mongoose.model('Convertation', ConvertationSchema)
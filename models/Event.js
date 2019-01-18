const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EventSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: String
    },
    time: {
        type: String
    },
    status: {
        type: String,
        enum: ['Free', 'Regular'],
        default: ['Free'],
        required: true
    },
    price: {
        type: String,
        default: 'Rp. 0'
    },
    images: {
        type: String
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
module.exports = mongoose.model('Event', EventSchema)
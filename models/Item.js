const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    maxmember: {
        type: String,
        require: true,
        default: '-'
    },
    price: {
        type: String,
        require: true,
        default: 'Free'
    },
    facilities: [{
        meetingroom: {
            type: String,
            require: true,
            default: '-'
        },
        silentroom: {
            type: String,
            require: true,
            default: '-'
        },
        paperprint: {
            type: String,
            require: true,
            default: '-'
        },
        silentroom: {
            type: String,
            require: true,
            default: '-'
        },
        freeflow: {
            type: String,
            require: true,
            default: 'yes'
        },
        premiumflow: {
            type: String,
            require: true,
            default: '-'
        },
        mailphoneservice: {
            type: String,
            require: true,
            default: '-'
        },
        locker: {
            type: String,
            require: true,
            default: '-'
        },
        passport: {
            type: String,
            require: true,
            default: '-'
        },
        guestpass: {
            type: String,
            require: true,
            default: '-'
        },

    }],
    images: {
        type: String
    }
})
module.exports = mongoose.model('Item', ItemSchema)
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TenantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    status: {
        type: String,
        enum: ['Active', 'Inactive']
    },
    images: {
        type: String
    }


})
module.exports = mongoose.model('Tenant', TenantSchema)
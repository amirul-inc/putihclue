const mongoose = require ('mongoose')
const Schema = mongoose.Schema

let EventOrderSchema = new Schema ({
    fullname: {
        type: String,
        required: true
    },
    event: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Event"
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Paid', 'Unpaid'],
        default: 'Unpaid'
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

module.exports = Order = mongoose.model("EventOrder", EventOrderSchema);

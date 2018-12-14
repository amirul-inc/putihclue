const mongoose = require ('mongoose')
const Schema = mongoose.Schema

let OrderSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    item: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Item"
    },
    status: {
        type: String,
        enum: ['Paid', 'Unpaid'],
        required: true,
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

module.exports = Order = mongoose.model("Order", OrderSchema);

const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
},
capacity: {
    type: String,
    required: true
},
accesstime: {
    type: String,
    required: true
},
description: {
    type: String
},
status: {
    type: String,
    enum: ['Avilable', 'Booked'],
    default: ['Avilable'],
    required: true
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

});

module.exports = mongoose.model('Item', ItemSchema);
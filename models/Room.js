const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
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
price: {
  type: String,
  required: true
},
description: {
    type: String,
    required: true
},
status: {
    type: String,
    enum: ['Available', 'Booked'],
    default: ['Available'],
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

module.exports = mongoose.model('Room', RoomSchema);
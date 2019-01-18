const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const GuestSchema = new Schema({
    company: {
        type: String,
        required: true
      },
	fullname: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      phone: {
        type: String,
        require: true
      },
      necessary: {
        type: String,
        required: true
      },
      meet: {
        type: String,
        required: true
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

module.exports = mongoose.model('Guest', GuestSchema);

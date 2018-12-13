const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 12;

//Define a schema
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	username: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: true
      },
      phone: {
        type: String,
        require: true
      },
      isAdmin: {
        type: Boolean,
        default: false
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

UserSchema.pre('save', function(next){
this.password = bcrypt.hashSync(this.password, saltRounds);
next();
});

module.exports = mongoose.model('User', UserSchema);

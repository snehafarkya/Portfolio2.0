const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    nameS: {
        type: String,
        required: true
    },
    roleS: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }

});

const User = mongoose.model('User', dataSchema);


module.exports = User;
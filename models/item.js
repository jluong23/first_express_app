const mongoose = require('mongoose');
const itemSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;
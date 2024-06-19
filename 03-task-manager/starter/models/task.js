const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Provide name"],
        trim: true,
        maxlength: [20, 'Name must be less than 20 chars']
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('tasks', taskSchema);
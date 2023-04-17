const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const taskSchema = new mongoose.Schema({
    id: {
        type: String,
        default: uuidv4,
    }, 
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    status:{
        type: String,
        enum: ['completed' , 'incomplete'],
        default: 'incomplete',
    }
});


const Task = mongoose.model('Task' , taskSchema);
module.exports = Task;
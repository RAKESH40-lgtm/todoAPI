const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    todos: [{
        activity: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            default: "Pending"
        },
        action: { 
            type: String 
        },
    }],
})

const todoModal =mongoose.model("todo",todoSchema);
module.exports =todoModal;
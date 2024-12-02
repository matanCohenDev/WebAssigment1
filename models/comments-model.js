const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema({
    _id:{
        type: Number,
        default: 0
    },
    postId:{
        type: Number,
        required: true
    },
    content: { 
        type: String, 
        required: true 
    },

    sender: { 
        type: String, 
        required: true 
    }, 

    createdAt: {
         type: Date,
          default: Date.now 
        },

});
module.exports = mongoose.model('Comment', commentSchema);
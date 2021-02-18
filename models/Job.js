
const mongoose = require('mongoose');
const JobSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    email: {
        type:String,
      
    },
    position: {
        type:String,
      
    },
    resume: {
        type:String,
      
    },
    phone: {
        type:String,
      
    },
    location: {
        type:String
  
    },
    message: {
        type:String
  
    },
    createdAt: {
        type:Date, 
        defualt: Date.now
    }
})

module.exports = mongoose.model('Job' ,  JobSchema)

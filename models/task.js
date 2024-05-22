const mongoose=require('mongoose')

const taskSchema=new mongoose.Schema({
    title:{
        type:String,
        unique:true,
        required:true

    },
    description:{
        type:String,
        required:true
    },
    priority:{
        type:String,
        required:true,
        enum:["high","low","medium"]
    },
    dueDate:{
        type:String,
        required:true
    }
})

const task=mongoose.model('task',taskSchema);
module.exports=task;
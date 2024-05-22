// const { Schema, default: mongoose } = require('mongoose')
const mongoose=require('mongoose')

//creating blueprint i.e Schema
const personSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:Number,
    work:{
        type:String,
        enum:['Chef','manager','waiter'],
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    address:String,
    email:{
        type:String,
        unique: true

    },
    salary:{
        type:Number,
        required:true
    }

});
//create model now
const person=mongoose.model('Person',personSchema);
module.exports=person;


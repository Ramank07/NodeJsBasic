// const { Schema, default: mongoose } = require('mongoose')

const mongoose=require('mongoose')
const bcrypt=require('bcrypt')

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
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }


});
//create model now
personSchema.pre('save',async function(next){
    const person=this;//this will store all the data of  user before save

    //hash the password only when modified or new generated
    // if(person.isModified('password')) return next();

    // try {
    //     //to generate hash password

    //     //first generate saalt
    //     const salt=await bcrypt.genSalt(10)

    //     //hash password
    //     const hashedPassword=await bcrypt.hash(person.password,salt)//it generate password by person.password(given by user)and salt.

    //     person.password=hashedPassword

    //     next();
    // } catch (error) {
    //     return next(error)
    // }
    if (person.isModified('password')) {
        try {
            const salt = await bcrypt.genSalt(10);
            person.password = await bcrypt.hash(person.password, salt);
        } catch (err) {
            return next(err);
        }
    }
    next();
});


personSchema.methods.comparePassword=async function(candidatePassword){
    try {
        //ise bcrypt to compare the provided password with hashed password
        const isMatch=await bcrypt.compare(candidatePassword,this.password);
        return isMatch
    } catch (error) {
        throw error
    }

}

const person=mongoose.model('Person',personSchema);
module.exports=person;


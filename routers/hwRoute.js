const express=require('express')
const router = express.Router();
const task=require('./../models/task')

//Creating a POST API for TASK with Express and Mongoose

router.post('/api/task',async(req,res)=>{
    try {
     
     const newTask=new task(req.body);
     const dataSaved=await newTask.save();
 
     // console.log(dataSaved);
     res.status(200).json(newTask);
    } catch (error) {
         console.log(error);
         res.status(500).json('Internal sever error',error)
    }
 
 
 })
 //Creating a GET API for TASK with Express and Mongoose
 
 router.get('/api/task',async(req,res)=>{
    try {
     const data=await task.find();
     //   console.log(data);
     res.status(200).json(data)
    } catch (error) {
     console.log(error);
     res.status(500).json('Internal sever error',error)
 
    }
 })
 module.exports=router;
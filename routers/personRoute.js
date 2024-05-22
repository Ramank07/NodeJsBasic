const express=require('express')
const router = express.Router();
const person=require('../models/person')

router.post('/',async(req,res)=>{

    try {
        const data=req.body;
        const newPerson=new person(data);
        const savedPerson=await newPerson.save()

        console.log('Saved person to data')
        res.status(200).json(savedPerson)

    } catch (error) {
        console.log('error on saving',error);
        res.status(500).json({'internal server error':error})
    }


})

router.get('/',async(req,res)=>{
    try {
        const data=await person.find();
        console.log('data fetched')
        res.status(200).json(data);
    } catch (error) {
        console.log('error problem',error)
        res.status(500).json({'internal error problem':error});
    }
})

router.get('/:workType',async(req,res)=>{

   try {
    const workType=req.params.workType;
    if(workType=='waiter'|| workType=='manager'||workType=='Chef'){
        const response=await person.find({work:workType});
        console.log('data fetched');
        res.status(500).json(response)

    }else{
        res.status(404).json({error:'invalid work type'})

    }
   } catch (error) {
        console.log('error on saving',error);
        res.status(500).json({'internal server error':error})
   }
 
})

router.put('/:id',async(req,res)=>{
   try {
    const data=req.params.id; //it store id we want to update
    const toUpdateData=req.body; //data provided by user to be update
    const updatedData=await person.findByIdAndUpdate(data,toUpdateData,{
        new:true,
        runValidators:true
    })//three parameter:-'id to update','data send by user to update'
    if(!updatedData){
        return res.status(404).json({error:'data not find'})
    }

    console.log('data updated');
    res.status(200).json(updatedData)
   } catch (error) {
    console.log('error on saving',error);
    res.status(500).json({'internal server error':error})
   }
})
router.delete('/:id',async(req,res)=>{
   try {
    const id=req.params.id;
    const deletedData= await person.findByIdAndDelete(id);
    if(!deletedData){
        return res.status(404).json({error:'data not find'})
    }
    console.log('deleted successfully');
    res.status(200).json(deletedData)

   } catch (error) {
    console.log('error on saving',error);
    res.status(500).json({'internal server error':error})
   }

})

module.exports=router;
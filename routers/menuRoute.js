const express=require('express')
const router = express.Router();
const menu=require('./../models/menu')

router.post('/',async(req,res)=>{
    try {
        const data=req.body
        const menuItem=new menu(data)
        const savedMenuItem=await menuItem.save()
        console.log('data saved for menu',savedMenuItem)
        res.status(200).json(savedMenuItem)


    } catch (error) {
        console.log(error);
        res.status(500).json('Internal sever error',error)
    }
})
//get API for menu 

router.get('/',async(req,res)=>{
    try {
        const data=await menu.find();
        console.log('menu data found');
        res.status(200).json(data);

    } catch (error) {
        console.log(error);
        res.status(500).json({'internal server problem':error});
    }
})
router.get('/:tasteType',async(req,res)=>{
    try {
        const tasteType=req.params.tasteType;
        const data=await menu.find({taste:tasteType});
        console.log('menu data found');
        res.status(200).json(data);

    } catch (error) {
        console.log(error);
        res.status(500).json({'internal server problem':error});
    }
})
module.exports=router;

const mongoose=require('mongoose')
require('dotenv').config();
const Db_Url=process.env.DBUrl;
const mongoURL = Db_Url;


 mongoose.connect(mongoURL)

 const db=mongoose.connection;

 db.on('connected',()=>{
    console.log('MongoDb is connected')
 })

 db.on('error  ',(err)=>{
    console.log(err)
 })


 module.exports=db;
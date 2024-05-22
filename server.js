const express=require('express')
const app=express()
const db=require('./db')
require('dotenv').config();




const bodyParser=require('body-parser')


//middleware
app.use(bodyParser.json());






//Import Routes and Use routes


const personRoute=require('./routers/personRoute');
app.use('/person',personRoute)//use personRoutes//on clicking on '/person' it will go to personRouter i.e (const personRouter)

const menuRoute=require('./routers/menuRoute')
app.use('/menu',menuRoute)


const Port=process.env.PORT||3000;
app.listen(Port,()=>{
    console.log('server is running')
})
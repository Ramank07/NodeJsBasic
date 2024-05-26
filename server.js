const express=require('express')
const app=express()
const db=require('./db')
require('dotenv').config();
const passport=require('./auth')






const bodyParser=require('body-parser')


//middleware
app.use(bodyParser.json());





//middleWare Function
const logRequest=(req,res,next)=>{
    console.log(`[${new Date().toLocaleString()}] Request made to ${req.originalUrl}`)
    // res.send(`[${new Date().toLocaleString()}] Request made to ${req.originalUrl}`)
    next();
}
// app.use(logRequest)





//Import Routes and Use routes

// app.get('/',logRequest,(req,res)=>{  -->*******using of middleware ********
//     res.send('welcome to hotel')
// })
const localAuthMiddleware=passport.authenticate('local',{session:false});
app.use(passport.initialize()) 

app.get('/',(req,res)=>{
    res.send('welcome to hotel')
})
const personRoute=require('./routers/personRoute');
app.use('/person',localAuthMiddleware,personRoute)//use personRoutes//on clicking on '/person' it will go to personRouter i.e (const personRouter)

const menuRoute=require('./routers/menuRoute')
app.use('/menu',menuRoute)


const Port=process.env.PORT||3000;
app.listen(Port,()=>{
    console.log('server is running')
})
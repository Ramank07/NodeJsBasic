const express=require('express')
const app=express()
const db=require('./db')
    

app.get('/',(req,res)=>{
    res.send('welcome to homePage')
})
/*app.get('/chiken',(req,res)=>{
    res.send('love to serve it')
})
app.get('/idli',(req,res)=>{
    
    var idliType={
        name:"idli",
        price:52,
        isWithSambhar:true,
        isWithChatni:false

    }

    res.send(idliType)
})
//Weather API

app.get('/weather',(req,res)=>{
   const weather={ 
     currentTemp:'34°',
     condition:'stromy',
     city:'Jharkhand'
}
res.json(weather)

})*/





app.listen(3000,()=>{
    console.log('sever is running')
})
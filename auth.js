const passport=require('passport')
const LocalStrategy = require('passport-local').Strategy
const person=require('./models/person')

passport.use(new LocalStrategy(async(USERNAME,PASSWORD,done)=>{
    try {
        // console.log('recieved credential:',USERNAME,PASSWORD);
        const user=await person.findOne({username:USERNAME});
        if(!user)
            //done take three parameter done(error,user,info);
            return done(null,false,{message:'Invalid userName.'})

        // const isPasswordMatch=user.password==PASSWORD?true:false;
        const isPasswordMatch= await user.comparePassword(PASSWORD)//created  function i.e comparePassword(Password) for comparission

        if(isPasswordMatch){
            return done(null,user)
        }else{
            return done(null,false,{message:'invalid password'})
        }

    } catch (error) {
        return done(error)
    }
}))
module.exports=passport;
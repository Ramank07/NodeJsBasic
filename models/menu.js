const mongoose=require('mongoose')

const menuItemSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    gredients:{
        type:[String],
        default:[]
    },
    taste:{
        type:String,
        enum:['sweet','sour','spicy']
    },
    sales:{
        type:Number,
        default:0
    }
})
const menu=mongoose.model('menu',menuItemSchema);
module.exports=menu;
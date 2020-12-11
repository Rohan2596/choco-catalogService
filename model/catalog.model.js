const mongoose=require('mongoose')

const catalogScheme=new mongoose.Schema(
    {
        'name':{
            type:String,
            required:true
        },
        'category':{
            type:String,
            required:true
        },
        'items':{
            type:[]
        }
    },{
        timestamps:true
    })

const catalogModel=mongoose.model('catalog',catalogScheme)
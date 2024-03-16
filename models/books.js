const mongoose=require('mongoose');

const libraryschem=mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        author:{
            type:String,
            required:true
        },
        genre:{
            type:String,
            required:true
        },
        price:{
            type: String, 
            required:true
        },
        availability:{
            type:String,
            required:true
        }

        },{
        timeStamp:true
    });

const Library = mongoose.model('Library',libraryschem);
module.exports=Library;
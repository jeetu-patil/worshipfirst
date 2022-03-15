const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const mediaSchema=new mongoose.Schema({
    media_name:{type:String},
    media_file:{type:String},
    media_description:{type:String},
    media_comment:[
        {
            user:{
                type:Schema.Types.ObjectId,
                ref:"users"
            },
            text:{type:String}
        }
    ]
});

module.exports=mongoose.model("medias",mediaSchema);
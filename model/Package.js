const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const packageSchema=new mongoose.Schema({
    pack_name:{type:String},
    pack_image:{type:String},
    pack_qty:{type:String},
    pack_price:{type:String},
    pack_description:{type:String},
    pack_discount:{type:Number},
    pack_comment:[
        {
            user:
            {
                type:Schema.Types.ObjectId,
                ref:"users"
            },
            text:
            {
                type:String
            }
        }
    ],
    f_cat_id:{type:String},
});
module.exports=mongoose.model("packages",packageSchema);
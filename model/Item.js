const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const itemSchema=new mongoose.Schema({
    item_name:{type:String},
    item_image:{type:String},
    item_qty:{type:String},
    item_price:{type:String},
    item_description:{type:String},
    item_discount:{type:Number},
    item_type:{type:String},
    item_comment:[
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
    f_cat_id:{type:Schema.Types.ObjectId},
});
module.exports=mongoose.model("items",itemSchema);
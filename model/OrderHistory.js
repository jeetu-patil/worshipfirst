const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const orderHistorySchema=new mongoose.Schema({
    order_add:{type:String,required:true},
    order_date:{type:Date,required:true},
    order_sum:{type:Number,required:true},
    order_mobile:{type:Number,required:true},
    order_email:{type:String,required:true},
    order_status:{type:String},
    cust_id:{type:Schema.Types.ObjectId,ref:"users"},
    cart:[{
        item_name:{type:String},
        item_image:{type:String},
        item_qty:{type:String},
        item_price:{type:String},
        item_description:{type:String},
        item_discount:{type:Number},
        item_type:{type:String}
    }]
});

module.exports=mongoose.model("history",orderHistorySchema);
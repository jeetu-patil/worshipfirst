const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const userSchema = new mongoose.Schema({
    user_name:String,
    user_gender:String,
    user_mobile:Number,
    user_email:String,
    user_address:String,
    user_password:String,
    user_image:String,
    user_cart:[
        {
            type:Schema.Types.ObjectId,
            ref:"items"
        }
    ]
});

module.exports =mongoose.model("users",userSchema);
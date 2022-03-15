const mongoose=require('mongoose');

const priestSchema=new mongoose.Schema({
    priest_name: String,
    priest_age: Number,
    priest_mobile: Number,
    priest_email: String,
    priest_image: String,
    priest_experience: String,
    priest_gender: String,
    priest_status: String,
    priest_password: String
});

module.exports=mongoose.model("priests",priestSchema);
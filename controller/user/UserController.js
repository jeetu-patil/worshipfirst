const Priest = require("../../model/Priest");
const User = require("../../model/User");
const Item= require("../../model/Item");
const Category = require("../../model/Category");
const Order = require("../../model/Order");


exports.signup = function(request,response) {
    User.create({
        user_name:request.body.name,
        user_gender:request.body.gender,
        user_mobile:request.body.mobile,
        user_email:request.body.email,
        user_address:request.body.address,
        user_password:request.body.password,
        user_image:"http://localhost:3000/userimages/"+request.file.filename
    })
    .then(result => {
        return response.status(200).json(result);
    })
    .catch(err => {
        return response.status(500).json(err);
    });
};

exports.allPriest = function(request,response) {
    Priest.find({priest_status:"approved"})
    .then(result => {
        return response.status(200).json(result);
    })
    .catch(err => {
        return response.status(500).json(err);
    });
}

exports.signin= function(request,response) {
    User.find({user_email:request.body.email,user_password:request.body.password})
    .then(result=>{
        if(result)
            return response.status(200).json(result);
        return response.status(200).json({msg:"Invalid Password And Email...."});
    })
    .catch(err=>{
        return response.status(500).json(err);
    });
}

exports.allItems = (request,response) => {
    Item.find()
    .then(result=>{
        return response.status(200).json(result);
    })
    .catch(err=>{
        return response.status(500).json(err);
    });
}


exports.allCategories = (request,response) => {
    Category.find()
    .then(result => {
        return response.status(200).json(result);
    })
    .catch(err => {
        return response.status(500).json(err);
    });
}

exports.allItemsByCategory= function(request,response) {
    Item.find({f_cat_id:request.params.id})
    .then(result =>{
        return response.status(200).json(result);
    })
    .catch(err => {
        return response.status(500).json(err);
    });
}

exports.myOrder=(request,response)=>{
    Order.findOne({cust_id:request.params.id})
    .then(result=>{
        response.status(200).json(result.cart);
    })
    .catch(err => {
        console.log(err);
        return response.status(500).json(err);
    });
};
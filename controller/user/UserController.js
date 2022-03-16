const Priest = require("../../model/Priest");
const User = require("../../model/User");
const Item= require("../../model/Item");
const Category = require("../../model/Category");
const Order = require("../../model/Order");
const OrderHistory = require("../../model/OrderHistory");


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

exports.orderhistory= function(request,response) {
    OrderHistory.find({cust_id:request.params.id})
    .then(result => {
        return response.status(200).json(result);
    })
    .catch(err => {
        return response.status(500).json(err);
    });
}

exports.cancelOrder= function(request,response) {
    Order.updateOne({_id:request.params.id},
        {
            $set:
            {
                order_status:"cancel"
            }
        }    
    )
    .then(result => {
        Order.findOne({_id:request.params.id})
        .then(result => {
            console.log("RESULT : "+result);
            OrderHistory.create({
                order_add:result.order_add,
                order_date:Date.now(),
                order_sum:result.order_sum,
                order_mobile:result.order_mobile,
                order_email:result.order_email,
                cust_id:result.cust_id,
                order_status:result.order_status,
                cart:result.cart
            })
            .then(result => {
                Order.deleteOne({_id:request.params.id})
                .then(result => {
                    return response.status(200).json(result);
                })
            })
            .catch(err => {
               console.error(err);
            });
        })
        .ctach(err => {
           console.error(err);
        });
    })
    .catch(err => {
        return response.status(500).json(err);
    });
}


exports.editProfilePhoto= (request, response) => {
    User.updateOne({_id:request.body.id},{$set:{user_image:"http://localhost:3000/userimages/"+request.file.filename}})
    .then(result =>{
        return response.status(200).json({msg:"updated successfully...."});
    })
    .catch(err=>{
        return response.status(500).json(err);
    });
}

exports.editProfile= (request, response) => {
    User.updateOne({_id:request.body.id},{$set:{
        user_name: request.body.name,
        user_mobile:request.body.mobile,
        user_email: request.body.email,
        user_address: request.body.address
       }})
    .then(result =>{
        return response.status(200).json({msg:"updated successfully...."});
    })
    .catch(err=>{
        return response.status(500).json(err);
    });
}

exports.deleteProfile= (request, response) => {
    User.deleteOne({_id:request.params.id})
    .then(result =>{
        return response.status(200).json(result);
    })
    .catch(err=>{
        return response.status(500).json(err);
    });
}
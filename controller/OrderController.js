const Order=require('../model/Order');
const User=require('../model/User');

exports.addOrder=async (request,response) => {
    let user=await User.findOne({_id:request.body.cust_id}).populate("user_cart");
    
    Order.create({
        order_add:request.body.order_add,
        order_date:Date.now(),
        order_sum:request.body.order_sum,
        order_mobile:request.body.order_mobile,
        order_email:request.body.order_email,
        cust_id:request.body.cust_id,
        order_status:"approved",
        cart:request.body.cart
    })
    .then(result => {
        User.updateOne({_id:request.body.cust_id},
            {
                $set:{user_cart:[]}
            }    
        )
        .then(result => {
            return response.status(200).json({msg:"Your Order Is Placed... And Cart Is Empty...."});
        })
        .catch(err => {
            return response.status(500).json(err);
        });
    })
    .catch(err => {
        return response.status(500).json(err);
    });
    
    
}
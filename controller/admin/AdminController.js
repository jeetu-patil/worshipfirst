const Priest=require("../../model/Priest");
const Order=require("../../model/Order");
const OrderHistory=require("../../model/orderHistory");


exports.viewPrist=(request,response) => {
    Priest.find({priest_status:"decline"})
    .then(result => {
        return response.status(200).json(result);
    })
    .catch(err => {
        return response.status(500).json(err);
    });
};

exports.permissionPrist=(request,response) => {
    if(request.body.status=="decline")
    {
        Priest.deleteOne({_id:request.params.priest_id})
        .then(result => {
            return response.status(200).json(result);
        })
        .catch(err => {
            return response.status(500).json(err);
        });     
    }
    else
    {
        Priest.updateOne({_id:request.params.priest_id},{$set:{priest_status:"approved"}})
        .then(result => {
            return response.status(200).json(result);
        })
        .catch(err => {
            return response.status(500).json(err);
        });
    }
}

exports.allOrders=(request,response) => {
    Order.find()
    .then(result => {
        return response.status(200).json(result);
    })
    .catch(err => {
        return response.status(500).json(err);
    });
}

exports.orederShipped = (request,response)=>{
    Order.updateOne({_id:request.params.id},
        {
            $set:
            {
                order_status:"shipped"
            }
        }    
    )
    .then(result => {
        return response.status(200).json({msg:"success"});
    })
    .catch(err => {
        return response.status(500).json(err);
    });
}

exports.orederDelivered = (request,response)=>{
    Order.updateOne({_id:request.params.id},
        {
            $set:
            {
                order_status:"sucess"
            }
        }    
    )
    .then(result => {
        Order.findOne({_id:id})
        .then(result => {
            console.log(result);
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
                return response.status(500).json(err);
            });
        })
        .ctach(err => {
            return response.status(500).json(err);
        });
    })
    .catch(err => {
        return response.status(500).json(err);
    });
}
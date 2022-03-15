const User = require("../model/User");

exports.addCart= async (request,response) => {
    User.findOne({_id:request.body.user_id})
    .then((user) => {
        user.user_cart.push(request.body.item_id);
        user.save()
        .then(result => {
            return response.status(200).json(result);
        })
        .catch(err => {
            return response.status(500).json(err);
        });
    })
    .catch((error) => {
        return response.status(500).json(error);
    });
    
}

exports.viewCart=(request,response) => {
    User.findOne({_id: request.params.id})
    .populate("user_cart")
    .then((result) => {
        return response.status(200).json(result);
    })
    .catch((err) => {
        return response.status(500).json(err);
    });
}

exports.removeItem=function(request,response){
    User.updateOne({_id:request.params.user_id},
        {
            $pullAll:{
                user_cart:[{_id:request.params.item_id}]
            }
        }    
    )
    .then((result) => {
        return response.status(200).json(result);
    })
    .catch((err) => {
        return response.status(500).json(err);
    });
}
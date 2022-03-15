const Item=require("../../model/Item");

exports.addItem=(request,response) => {
    Item.create({
        item_name:request.body.item_name,
        item_image:"http://localhost:3000/images/"+request.file.filename,
        item_qty:request.body.item_qty,
        item_price:request.body.item_price,
        item_description:request.body.item_desc,
        item_discount:request.body.item_discount*1,
        item_type:request.body.item_type,
        f_cat_id:request.body.cat_id
    })
    .then((result) => {
        return response.status(200).json(result);
    })
    .catch((err) => {
        return response.status(500).json(err);
    });
};

exports.viewItem = function(request,response) {
    Item.find()
    .then((result) => {
        return response.status(200).json(result);
    })
    .catch((err) => {
        return response.status(500).json(err);
    })
}

exports.deleteItem = function(request,response) {
    Item.deleteOne({_id:request.params.item_id})
    .then((result) => {
        return response.status(200).json(result);
    })
    .catch((err) => {
        return response.status(500).json(err);
    })
}

exports.editItem= function(request,response) {
    Item.updateOne({_id:request.body.pack_id},
        {
            $set:
            {
                item_name:request.body.pack_name,
                item_image:"http://localhost:3000/images/"+request.file.filename,
                item_qty:request.body.item_qty,
                item_price:request.body.item_price,
                item_description:request.body.item_desc,
                item_discount:(request.body.item_discount)*1,
                f_cat_id:request.body.cat_id
            }
        })
        .then((result) => {
            console.log(result);
            return response.status(200).json({msg:"Update Success..."});
        })
        .catch((err) => {
            return response.status(500).json(err);
        });
}
const Package=require("../../model/Package");

exports.addPackage=(request,response) => {
    console.log(request.body);
    Package.create({
        pack_name:request.body.pack_name,
        pack_image:"http://localhost:3000/images/"+request.file.filename,
        pack_qty:request.body.pack_qty,
        pack_price:request.body.pack_price,
        pack_description:request.body.pack_desc,
        pack_discount:request.body.pack_discount*1,
        f_cat_id:request.body.cat_id
    })
    .then((result) => {
        return response.status(200).json(result);
    })
    .catch((err) => {
        return response.status(500).json(err);
    });
};

exports.viewPackage = function(request,response) {
    Package.find()
    .then((result) => {
        return response.status(200).json(result);
    })
    .catch((err) => {
        return response.status(500).json(err);
    })
}

exports.deletePackage = function(request,response) {
    Package.deleteOne({_id:request.params.pack_id})
    .then((result) => {
        return response.status(200).json(result);
    })
    .catch((err) => {
        return response.status(500).json(err);
    })
}

exports.editPackage= function(request,response) {
    Package.updateOne({_id:request.body.pack_id},
        {
            $set:
            {
                pack_name:request.body.pack_name,
                pack_image:"http://localhost:3000/images/"+request.file.filename,
                pack_qty:request.body.pack_qty,
                pack_price:request.body.pack_price,
                pack_description:request.body.pack_desc,
                pack_discount:request.body.pack_discount*1,
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
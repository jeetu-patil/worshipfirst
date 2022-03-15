const Category=require('../../model/Category');

exports.addCategory=(request,response) => {
    Category.create({
        cat_name: request.body.cat_name,
        cat_image: "http://localhost:3000/images/"+request.file.filename 
    })
    .then(result => {
        return response.status(200).json(result);
    })
    .catch(err => {
        return response.status(500).json(err);
    });
}

exports.viewCategory=(request,response) =>{
    Category.find()
    .then(result => {
        return response.status(200).json(result);
    })
    .catch(err => {
       return response.status(500).json(err); 
    });
}

exports.deleteCategory=(request,response) =>{
    Category.deleteOne({_id:request.params.cat_id})
    .then(result => {
        return response.status(200).json(result);
    })
    .catch(err => {
        return response.status(500).json(err);
    });
}

exports.editCategory=(request,response) => {
    Category.updateOne({_id:request.body.cat_id},{$set:{cat_name:request.body.cat_name,cat_image:"http://localhost:3000/images/"+request.file.filename}})
    .then(result => {
        Category.findOne({_id:request.body.cat_id})
        .then(category => {
            return response.status(200).json(category);
        })
        .catch(err => {
            return response.status(500).json(err);
        });
    })
    .catch(err => {
        return response.status(500).json(err);
    });
}

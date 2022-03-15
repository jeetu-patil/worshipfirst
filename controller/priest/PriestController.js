const Priest=require("../../model/Priest");

exports.signup = (request, response) => {
    Priest.create({
        priest_name: request.body.priest_name,
        priest_age: request.body.priest_age,
        priest_mobile: request.body.priest_mobile,
        priest_email: request.body.priest_email,
        priest_image: "http://localhost:3000/priestimages/"+request.file.filename,
        priest_experience: request.body.priest_exp,
        priest_gender: request.body.priest_gender,
        priest_password: request.body.priest_password,
        priest_status:"decline"
     })
     .then(result=>{
        return response.status(200).json(result);
     })
     .catch(err=>{
        return response.status(500).json(err);
     });
};

exports.signin=(request,response)=>{
    Priest.findOne({priest_email:request.body.email,priest_password:request.body.password,priest_status:"approved"})
    .then(result=>{
        if(result)
            return response.status(200).json(result);
        return response.status(200).json({msg:"Invalid Password And Email...."});
    })
    .catch(err=>{
        return response.status(500).json(err);
    });
};

exports.editProfilePhoto= (request, response) => {
    Priest.updateOne({_id:request.body.priest_id},{$set:{priest_image:"http://localhost:3000/priestimages/"+request.file.filename}})
    .then(result =>{
        return response.status(200).json({msg:"updated successfully...."});
    })
    .catch(err=>{
        return response.status(500).json(err);
    });
}

exports.editProfile= (request, response) => {
    Priest.updateOne({_id:request.body.priest_id},{$set:{
        priest_name: request.body.priest_name,
        priest_mobile:request.body.priest_mobile,
        priest_email: request.body.priest_email,
        priest_experience: request.body.priest_exp
       }})
    .then(result =>{
        return response.status(200).json({msg:"updated successfully...."});
    })
    .catch(err=>{
        return response.status(500).json(err);
    });
}

exports.deleteProfile= (request, response) => {
    Priest.deleteOne({_id:request.params.id})
    .then(result =>{
        return response.status(200).json(result);
    })
    .catch(err=>{
        return response.status(500).json(err);
    });
}
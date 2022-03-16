const Media=require("../../model/Media");


exports.addMedia = function(request,response){
    Media.create({
        media_name:request.body.media_name,
        media_file:"http://localhost:3000/videoes/"+request.file.filename,
        media_description:request.body.Media_desc,
    })
    .then(result=>{
        return response.status(200).json(result);
    })
    .catch(err=>{
        return response.status(500).json(err);
    });
};

exports.viewMedia=(request,response)=>{
    Media.find()
    .then(result=>{
        return response.status(200).json(result);
    })
    .catch(err=>{
        return response.status(500).json(err);
    });
};

exports.deleteMedia=(request,response)=>{
    Media.deleteOne({_id:request.params.media_id})
    .then(result=>{
        return response.status(200).json(result);
    })
    .catch(err=>{
        return response.status(500).json(err);
    });
};


exports.commentSection= function(request,response) {
    Media.findOne({_id:request.body.id})
    .then((media) => {
        media.media_comment.push({user:request.body.user,text:request.body.text});
        item.save();
        return response.status(200).json({msg:"Comment updated"});
    })
    .catch((err) => {
        return response.status(500).json(err);
    });
}
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
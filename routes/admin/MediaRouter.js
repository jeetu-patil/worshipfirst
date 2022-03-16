const express=require('express');
const router=express.Router();

const multer= require("multer");
const storage=multer.diskStorage({
    destination:"public/videoes",
    filename:(request,file,callback) =>{
        callback(null,Date.now()+"-"+file.originalname);
    }
});
const upload=multer({storage:storage});

const mediaController = require("../../controller/admin/MediaController");



router.post("/add",upload.single("media_file"),mediaController.addMedia);
router.get("/viewmedia",mediaController.viewMedia);
router.get("/deletemedia/:media_id",mediaController.deleteMedia);

router.post("/comment",mediaController.commentSection);


module.exports =router;
const express=require('express');
const router=express.Router();

const multer= require("multer");
const storage=multer.diskStorage({
    destination:"public/priestimages",
    filename:(request,file,callback) =>{
        callback(null,Date.now()+"-"+file.originalname);
    }
});

const upload=multer({storage:storage});

const priestController = require("../../controller/priest/PriestController");


router.post("/signup",upload.single("priest_image"),priestController.signup);
router.post("/signin",priestController.signin);
router.post("/editprofilephoto",upload.single("priest_image"),priestController.editProfilePhoto);
router.post("/editprofile",upload.single("priest_image"),priestController.editProfile);
router.get("/deleteprofile/:id",priestController.deleteProfile);

module.exports=router;
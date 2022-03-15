const express=require('express');
const router=express.Router();

const packageController=require('../../controller/admin/PackageController');


const multer=require('multer');
const storage=multer.diskStorage({
    destination:"public/images",
    filename:(request,file,callback) =>{
        callback(null,Date.now()+"-"+file.originalname);
    }
});
const upload=multer({storage:storage});



router.post("/add",upload.single("pack_image"),packageController.addPackage);
router.get("/viewpackage",packageController.viewPackage);
router.get("/deletepackage/:pack_id",packageController.deletePackage);
router.post("/editpackage",upload.single("pack_image"),packageController.editPackage);

module.exports =router;
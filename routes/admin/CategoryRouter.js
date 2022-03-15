const express=require('express');
const router=express.Router();

const multer=require('multer');
const storage=multer.diskStorage({
    destination:"public/images",
    filename:(request,file,callback) =>{
        callback(null,Date.now()+"-"+file.originalname);
    }
});

const upload=multer({storage:storage});

const categoryController = require("../../controller/admin/CategoryController");

router.post("/add",upload.single("cat_image"),categoryController.addCategory);
router.get("/viewcategory",categoryController.viewCategory);
router.get("/deletecategory/:cat_id",categoryController.deleteCategory);
router.post("/editcategory",upload.single("cat_image"),categoryController.editCategory);


module.exports=router;
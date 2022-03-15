const express = require("express");
const router=express.Router();



const multer=require('multer');
const storage=multer.diskStorage({
    destination:"public/userimages",
    filename:(request,file,callback) =>{
        callback(null,Date.now()+"-"+file.originalname);
    }
});

const upload=multer({storage:storage});

const userController = require("../../controller/user/UserController");

router.post("/signup",upload.single("user_image"),userController.signup);
router.post("/signin",userController.signin);
router.get("/allpriest",userController.allPriest);

router.get("/allitems",userController.allItems);
router.get("/allcategories",userController.allCategories);
router.get("/allitemsbycategory/:id",userController.allItemsByCategory);

router.get("/myorders/:id",userController.myOrder);



module.exports =router;
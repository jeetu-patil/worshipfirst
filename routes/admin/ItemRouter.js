const express=require('express');
const router=express.Router();

const itemController=require('../../controller/admin/ItemController');


const multer=require('multer');
const storage=multer.diskStorage({
    destination:"public/images",
    filename:(request,file,callback) =>{
        callback(null,Date.now()+"-"+file.originalname); 
    }
});
const upload=multer({storage:storage});



router.post("/add",upload.single("item_image"),itemController.addItem);
router.get("/viewitem",itemController.viewItem);
router.get("/deleteitem/:item_id",itemController.deleteItem);
router.post("/edititem",upload.single("item_image"),itemController.editItem);

router.post("/comment",itemController.commentSection);

module.exports =router;
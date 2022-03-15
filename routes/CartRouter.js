const express=require('express');
const router=express.Router();

const cartController = require('../controller/CartController');

router.post("/addcart",cartController.addCart);
router.get("/viewcart/:id", cartController.viewCart);
router.get("/removeitem/:user_id/:item_id", cartController.removeItem);



module.exports =router;
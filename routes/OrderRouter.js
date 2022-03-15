const express=require('express');
const router=express.Router();


const orderController=require("../controller/OrderController");

router.post("/addorder",orderController.addOrder);


module.exports =router;
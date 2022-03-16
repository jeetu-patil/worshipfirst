const express=require('express');
const router=express.Router();

const adminController=require('../../controller/admin/AdminController');

router.get("/viewpriest",adminController.viewPrist);
router.get("/priestpermission/:priest_id",adminController.permissionPrist);

router.get("/allorders",adminController.allOrders);
router.get("/oredershipped/:id",adminController.orederShipped);
router.get("/orederdelivered/:id",adminController.orederDelivered);

router.get("/orderhistory",adminController.orderHistory);

router.post("/signin",adminController.signIn);
module.exports=router;
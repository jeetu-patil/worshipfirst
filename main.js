const express=require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose=require('mongoose');


app.use(bodyParser.urlencoded({extensions:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


const categoryRouter=require('./routes/admin/categoryRouter');
const packageRouter=require('./routes/admin/PackageRouter');
const itemRouter=require('./routes/admin/ItemRouter');
const mediaRouter=require('./routes/admin/MediaRouter');

const priestRouter=require('./routes/preist/PriestRouter');
const adminRouter=require('./routes/admin/AdminRouter');
const userRouter=require('./routes/user/UserRouter');
const cartRouter=require('./routes/CartRouter');
const orderRouter=require('./routes/OrderRouter');


mongoose.connect("mongodb+srv://jitu:jitu%40123@cluster0.5msi4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then(()=>{
    app.use("/admin",adminRouter);
    app.use("/admin/category",categoryRouter);
    app.use("/admin/package",packageRouter);
    app.use("/admin/item",itemRouter);
    app.use("/admin/media",mediaRouter);

    app.use("/priest",priestRouter);
    app.use("/user",userRouter);

    app.use("/cart",cartRouter);
    app.use("/order",orderRouter);
})
.catch(err => {
    console.log(err);
});







app.listen(3000,()=>{
    console.log("server Started At Port : 3000");
});
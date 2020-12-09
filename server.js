const express=require('express');
const app=express();
const route=require('./routes/route');

app.use("/choco/customer/catalog",route);










//Listening to Port 3000
app.listen(3000,()=>{
    console.log("Listening to port 3000.");
})
const express =require('express')
const route=express.Router();

route.post("/:token/add",()=>{
    console.log("Adding Items to Catalog");
})

route.post("/:token/edit/:catalogId",()=>{
    console.log("Editing Catalog Items")
})

route.get("/:token/all",()=>{
    console.log("Getting Catalog Items of supplier");
})

route.delete("/:token/detele/:catalogId",()=>{
    console.log("Deleting Catalog Items permantelety");
})

route.put("/:token/remove/:catalogId",()=>{
    console.log("Removing Catalog Items for display list.");
})

module.exports=route;
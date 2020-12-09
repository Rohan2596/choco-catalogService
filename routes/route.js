const express =require('express')
const route=express.Router();

const supplierController=require('../controller/SupplierController');

route.post("/:token/create",supplierController.createCatalog);

route.post("/:token/:catalogId/item",supplierController.addItemtoCatalog);

route.put("/:token/:catalogId/item/:itemId",supplierController.editItemofCatalog);

route.get("/:token/:catalogId/all",supplierController.getAllItemsofCatalog);

route.delete("/:token/:catalogId/:itemId",supplierController.deleteItemofCatalog);

route.put("/:token/:catalogId/remove/:itemId",supplierController.removeItemFromCatalog);


module.exports=route;
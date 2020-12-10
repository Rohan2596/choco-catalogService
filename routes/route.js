const express =require('express')
const route=express.Router();

const supplierController=require('../controller/SupplierController');
//Catalog Routes
route.post("/:token/create",supplierController.createCatalog);
route.put("/:token/:catalogId","");
route.get("/:token/all","");
route.get("/:token/:catalogId","");
//Catalog Item Routes

route.post("/:token/:catalogId/item",supplierController.addItemtoCatalog);

route.put("/:token/:catalogId/item/:itemId",supplierController.editItemofCatalog);

route.get("/:token/:catalogId/item/all",supplierController.getAllItemsofCatalog);

route.delete("/:token/:catalogId/:itemId",supplierController.deleteItemofCatalog);

route.put("/:token/:catalogId/remove/:itemId",supplierController.removeItemFromCatalog);


module.exports=route;
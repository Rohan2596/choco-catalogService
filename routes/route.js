const express =require('express')
const route=express.Router();

const catalogController=require('../controller/catalog.controller')
const itemController=require('../controller/item.controller');
//Catalog Routes
route.post("/:token/create",catalogController.createCatalog);
route.put("/:token/:catalogId",catalogController.editCatalog);
route.get("/:token/all",catalogController.getAllCatalog);
route.get("/:token/:catalogId",catalogController.getSupplierCatalog);
route.delete("/:token/:catalogId",catalogController.deleteCatalog)
//Catalog Item Routes

route.post("/:token/:catalogId/item",itemController.addItemtoCatalog);

route.put("/:token/:catalogId/item/:itemId",itemController.editItemofCatalog);

route.get("/:token/:catalogId/item/all",itemController.getAllItemsofCatalog);

route.delete("/:token/:catalogId/:itemId",itemController.deleteItemofCatalog);

route.put("/:token/:catalogId/remove/:itemId",itemController.removeItemFromCatalog);


module.exports=route;
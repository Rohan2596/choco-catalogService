const { deleteItemofCatalog } = require("../controller/SupplierController");

class SupplierService{

    createCatalog=(createCatalogDto,next)=>{
        try {
            console.log("Catalog Created Successfully.",createCatalogDto);
            
        } catch (error) {
            next(error)
        }
    };

    

    addItemtoCatalog=(addItemDto,next)=>{
        try {
            console.log("Add iTem to catalog",addItemDto);
        } catch (error) {
            next(error)
        }
    };
    editItemtoCatalog=(editItemDto,next)=>{
        try {
            console.log("Edit Item to catalog",editItemDto);
        } catch (error) {
            next(error)
        }
    };
    getAllItemsofCatalog=(req,next)=>{
        try {
            console.log("Getting All Items of Catalog",req);
        } catch (error) {
            next(error)
        }
    };
    deleteItemOfCatalog=(req,next)=>{
        try {
            console.log("Delete an item from catalog",req);
        } catch (error) {
            next(error)
        }
    };
    removeItemFromCatalog=(req,next)=>{
        try {
            console.log("Remove an item from catalog",req);
        } catch (error) {
            next(error)
        }
    }

    
}

module.exports=new SupplierService();
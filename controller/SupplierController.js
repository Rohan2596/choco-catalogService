class SupplierController{
 
    createCatalog=(req,res)=>{
        console.log("create Catalog for supplier");
    };
    addItemtoCatalog=(req,res)=>{
        console.log("Adding Item to catalog");
    };
    editItemofCatalog=(req,res)=>{
        console.log("Editing Item of Catalog");
    };
    getAllItemsofCatalog=(req,res)=>{
        console.log("Getting All Item of Catalog");
    };
    deleteItemofCatalog=(req,res)=>{
        console.log("Deleting Item from  Catalog permanently.");
    };
    removeItemFromCatalog=(req,res)=>{
        console.log("Removing Item from Catalog");
    }
    


}

module.exports=new SupplierController();
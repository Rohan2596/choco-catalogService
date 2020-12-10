const { deleteItemofCatalog } = require("../controller/SupplierController");

class SupplierService{

    createCatalog=(createCatalogDto,next)=>{
        try {
            console.log("Catalog Created Successfully.",createCatalogDto);
            
        } catch (error) {
            next(error)
        }
    };

    

   

    
}

module.exports=new SupplierService();
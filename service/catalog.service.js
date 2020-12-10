class CatalogService{

    createCatalog=(createCatalogDto,next)=>{
        try {
            console.log("Catalog Created Successfully.",createCatalogDto);
            
        } catch (error) {
            next(error)
        }
    };

    editCatalog=(editCatalogDto,next)=>{
        try {
            console.log("Catalog Edited Succesfully.",editCatalogDto);
        } catch (error) {
            next(error)
        }
    };
    getAllCatalog=(getAllCatalogDto,next)=>{
        try {
            console.log("Getting All Catalog.",getAllCatalogDto);
        } catch (error) {
            next(error)
        }
    }
    getASuppliersCatalog=(getAsupplierDto,next)=>{
        try {
            console.log("Get A supplier Catalog ",getAsupplierDto);
        } catch (error) {
            next(error)
        }
    }

    

}
module.exports=new CatalogService();
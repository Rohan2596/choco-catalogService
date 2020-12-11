const catalogModel = require('../model/catalog.model')
class CatalogService {

    createCatalog = (createCatalogDto, next) => {
        try {
          return   catalogModel.createCatalog(createCatalogDto)
                .then(
                    (data) => {
                        console.log(data);
                        return data
                    }).catch((err)=>{
                        return err
                    })

        } catch (error) {
            console.log(error);
            next(error)
        }
    };

    editCatalog = (editCatalogDto, next) => {
        try {
            console.log("Catalog Edited Succesfully.", editCatalogDto);
            return editCatalogDto;
        } catch (error) {
            next(error)
        }
    };
    getAllCatalog = (getAllCatalogDto, next) => {
        try {
            console.log("Getting All Catalog.", getAllCatalogDto);
            return getAllCatalogDto;
        } catch (error) {
            next(error)
        }
    }
    getASuppliersCatalog = (getAsupplierDto, next) => {
        try {
            console.log("Get A supplier Catalog ", getAsupplierDto);
            return getAsupplierDto;
        } catch (error) {
            next(error)
        }
    }



}
module.exports = new CatalogService();
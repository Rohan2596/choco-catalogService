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
            return catalogModel.updateCatalog(editCatalogDto)
            .then(
                (data)=>{
                    return data;
                }
            ).catch((err)=>{
                return err
            })
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
          
            return catalogModel.getCatalog(getAsupplierDto)
            .then(
                (data)=>{
                    return data;
                }
            ).catch((err)=>{
                return err
            })
        } catch (error) {
            next(error)
        }
    }



}
module.exports = new CatalogService();
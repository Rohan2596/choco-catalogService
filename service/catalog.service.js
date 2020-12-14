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
    getAllCatalog = (next) => {
        try {
            return catalogModel.getAllCatalog()
            .then((data)=>{
                return data;
            }).catch((err)=>{
                return err;
            })
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
    };
    deleteACatalog=(catalogDto,next)=>{
        try {
            return catalogModel.deteleCatalog(catalogDto)
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
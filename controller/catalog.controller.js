const catalogService = require('../service/catalog.service')
class CatalogController {

    createCatalog = (req, res, next) => {
        try {
            let response = {}
            let token = req.params.token

            req.checkBody('name', 'Please Enter Valid Catalog name!').notEmpty().isAlpha().isLength({ min: '3', max: '10' });
            req.checkBody('category', 'Please Enter Valid Catalog category!').notEmpty().isAlpha().isLength({ min: '3', max: '10' });
            let validationErrors = req.validationErrors();
            if (validationErrors) {
                response.success = false;
                response.message = "Invalid Credentials for catalog!";
                response.data = validationErrors[0].msg;
                return res.status(500).send(response);
            } else {
                const createCatalogDto = {
                    'name': req.body.name,
                    'category': req.body.category,
                    'items': [],
                    'token': token
                }
                catalogService.createCatalog(createCatalogDto)
                    .then((data) => {
                        response.success = true;
                        response.message = data.message;
                        response.data = data;
                        return res.status(200).send(response);
                    }
                    ).catch((err) => {
                        response.success = false;
                        response.message = "Catalog Created SuccessFully!";
                        response.data = err;
                        return res.status(404).send(response);

                    })

            }
        } catch (error) {
            console.log(error);
            next(error)
        }
    };
    editCatalog = (req, res, next) => {
        try {
            let response = {}
            let token = req.params.token
            let catalogId = req.params.catalogId
            console.log(req.body);
            req.checkBody('name', 'Please Enter Valid Catalog name!').notEmpty().isAlpha().isLength({ min: '3', max: '10' });
            req.checkBody('category', 'Please Enter Valid Catalog category!').notEmpty().isAlpha().isLength({ min: '3', max: '10' });
            let validationErrors = req.validationErrors();
            if (validationErrors) {
                response.success = false;
                response.message = "Invalid Credentials for catalog!";
                response.data = validationErrors[0].msg;
                return res.status(500).send(response);
            } else {
                const editCatalogDto = {
                    'name': req.body.name,
                    'category': req.body.category,
                    'items': [],
                    'token': token,
                    'catalogId': catalogId
                }
                catalogService.editCatalog(editCatalogDto)
                    .then((data) => {
                        response.success = true;
                        response.message = data.message;
                        response.data = data;
                        return res.status(200).send(response);
                    }
                    ).catch((err) => {
                        response.success = false;
                        response.message = "Catalog Created SuccessFully!";
                        response.data = err;
                        return res.status(404).send(response);

                    })
            }
        } catch (error) {
            console.log(error);
            next(error)
        }
    };
    getAllCatalog = (req, res, next) => {
        try {
            let response = {}
            let token = req.params.token


            catalogService.getAllCatalog()
            .then((data) => {
                response.success = true;
                response.message = data.message;
                response.data = data;
                return res.status(200).send(response);
            }
            ).catch((err) => {
                response.success = false;
                response.message = "No Data Found.";
                response.data = err;
                return res.status(404).send(response);

            })

        } catch (error) {
            next(error)
        }


    };
    getSupplierCatalog = (req, res, next) => {
        try {
            let response = {}
            let token = req.params.token
            let catalogId = req.params.catalogId
            const catalogDto={
                'catalogId':catalogId,
                'customerId' :token
            }
            catalogService.getASuppliersCatalog(catalogDto)
            .then((data) => {
                response.success = true;
                response.message = data.message;
                response.data = data;
                return res.status(200).send(response);
            }
            ).catch((err) => {
                response.success = false;
                response.message = "Catalog Created SuccessFully!";
                response.data = err;
                return res.status(404).send(response);

            })

        } catch (error) {
            next(error)
        }

    };
    deleteCatalog=(req,res,next)=>{
        try {
            let response = {}
            let token = req.params.token
            let catalogId = req.params.catalogId
            const catalogDto={
                'catalogId':catalogId,
                'customerId' :token
            }
            catalogService.deleteACatalog(catalogDto)
            .then((data) => {
                response.success = true;
                response.message = data.message;
                response.data = data;
                return res.status(200).send(response);
            }
            ).catch((err) => {
                response.success = false;
                response.message = "Catalog Delete UnSuccessFully!";
                response.data = err;
                return res.status(404).send(response);

            })


        } catch (error) {
            next(error)
        }
    }

}
module.exports = new CatalogController();
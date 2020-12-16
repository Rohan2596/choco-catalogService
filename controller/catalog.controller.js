const catalogService = require('../service/catalog.service')
class CatalogController {

    /*
    @purpose :- Creating a Catalog based on UserId
    @author :- Rohan Kadam
    */
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
                        response.data = data.data;
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

    /*
    @purpose :- Editing a Catalog based on UserId and Catalog Id
    @author :- Rohan Kadam
    */
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
                        response.data = data.data;
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
    /*
    @purpose :- Getting all Catalogs of all Users.
    @author :- Rohan Kadam
    */
    getAllCatalog = (req, res, next) => {
        try {
            let response = {}
            let token = req.params.token


            catalogService.getAllCatalog()
                .then((data) => {
                    response.success = true;
                    response.message = data.message;
                    response.data = data.data;
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
    /*
    @purpose :- Getting a Catalog based on UserId and CatalogId
    @author :- Rohan Kadam
    */
    getSupplierCatalog = (req, res, next) => {
        try {
            let response = {}
            let token = req.params.token
            let catalogId = req.params.catalogId
            const catalogDto = {
                'catalogId': catalogId,
                'customerId': token
            }
            catalogService.getASuppliersCatalog(catalogDto)
                .then((data) => {
                    response.success = true;
                    response.message = data.message;
                    response.data = data.data;
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

    /*
    @purpose :- Deleting a Catalog based on UserId and catalogId
    @author :- Rohan Kadam
    */
    deleteCatalog = (req, res, next) => {
        try {
            let response = {}
            let token = req.params.token
            let catalogId = req.params.catalogId
            const catalogDto = {
                'catalogId': catalogId,
                'customerId': token
            }
            catalogService.deleteACatalog(catalogDto)
                .then((data) => {
                    response.success = true;
                    response.message = data.message;
                    response.data = data.data;
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
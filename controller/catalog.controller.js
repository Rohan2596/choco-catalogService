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
                const catalog = {
                    'name': req.body.name,
                    'category': req.body.category,
                    'items': []
                }
                response.success = true;
                response.message = "Catalog Created SuccessFully!";
                response.data = catalog;
                return res.status(200).send(response);
            }
        } catch (error) {
            next(error)
        }
    };
    editCatalog = (req, res, next) => {
        try {
            let response = {}
            let token = req.params.token
            let catalogId = req.params.catalogId
            req.checkBody('name', 'Please Enter Valid Catalog name!').notEmpty().isAlpha().isLength({ min: '3', max: '10' });
            req.checkBody('category', 'Please Enter Valid Catalog category!').notEmpty().isAlpha().isLength({ min: '3', max: '10' });
            let validationErrors = req.validationErrors();
            if (validationErrors) {
                response.success = false;
                response.message = "Invalid Credentials for catalog!";
                response.data = validationErrors[0].msg;
                return res.status(500).send(response);
            } else {
                const catalog = {
                    'name': req.body.name,
                    'category': req.body.category,
                    'items': []
                }
                response.success = true;
                response.message = "Catalog Edited SuccessFully!";
                response.data = catalog;
                return res.status(200).send(response);
            }
        } catch (error) {
            next(error)
        }
    };
    getAllCatalog = (req, res, next) => {
        try {
            let response = {}
            let token = req.params.token
            response.success = true;
            response.message = "Catalog All SuccessFully!";
            response.data = token;
            return res.status(200).send(response);

        } catch (error) {
            next(error)
        }


    };
    getSupplierCatalog=(req,res,next)=>{
        try {
            let response = {}
            let token = req.params.token
            let catalogId=req.params.catalogId
            response.success = true;
            response.message = "Get Catalog  SuccessFully!";
            response.data = token +" catalog Id:- " +catalogId;
            return res.status(200).send(response);

        } catch (error) {
            next(error)
        }


    }

}
module.exports = new CatalogController();
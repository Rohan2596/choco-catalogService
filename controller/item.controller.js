class ItemController{

     
    addItemtoCatalog = (req, res, next) => {

        try {
            let response = {}
            let token = req.params.token
            let catalogId = req.params.catalogId
            console.log(token + " <===> " + catalogId);
            req.checkBody('name', 'Please Enter Valid Item name!').notEmpty().isAlpha().isLength({ min: '3', max: '10' });
            req.checkBody('category', 'Please Enter Valid Item category!').notEmpty().isAlpha().isLength({ min: '3', max: '10' });
            req.checkBody('quantity', 'Please Enter Valid Item quantity!').notEmpty().isNumeric().isLength({ min: '1', max: '4' });
            req.checkBody('price', 'Please Enter Valid price per case !').notEmpty().isNumeric().isLength({ min: '1', max: '4' });
            req.checkBody('quantityType', 'Please Enter Valid quantity type ie case or box').notEmpty().isAlpha();

            let validationErrors = req.validationErrors();
            if (validationErrors) {
                response.success = false;
                response.message = "Invalid Credentials for item!";
                response.data = validationErrors[0].msg;
                return res.status(500).send(response);
            } else {
                const item = {
                    'name': req.body.name,
                    'category': req.body.category,
                    'quantity': req.body.quantity,
                    'price': req.body.price,
                    'quantityType': req.body.quantityType
                }
                response.success = true;
                response.message = "Item Added SuccessFully!";
                response.data = item;
                return res.status(200).send(response);
            }

        } catch (error) {
            next(error)
        }

    };
    editItemofCatalog = (req, res, next) => {
        try {
            let response = {}
            let token = req.params.token
            let catalogId = req.params.catalogId
            let itemId = req.params.itemId
            console.log(token + " <===> " + catalogId + "<==>" + itemId);
            req.checkBody('name', 'Please Enter Valid Item name!').notEmpty().isAlpha().isLength({ min: '3', max: '10' });
            req.checkBody('category', 'Please Enter Valid Item category!').notEmpty().isAlpha().isLength({ min: '3', max: '10' });
            req.checkBody('quantity', 'Please Enter Valid Item quantity!').notEmpty().isNumeric().isLength({ min: '1', max: '4' });
            req.checkBody('price', 'Please Enter Valid price per case !').notEmpty().isNumeric().isLength({ min: '1', max: '4' });
            req.checkBody('quantityType', 'Please Enter Valid quantity type ie case or box').notEmpty().isAlpha();

            let validationErrors = req.validationErrors();
            if (validationErrors) {
                response.success = false;
                response.message = "Invalid Credentials for item!";
                response.data = validationErrors[0].msg;
                return res.status(500).send(response);
            } else {
                const item = {
                    'name': req.body.name,
                    'category': req.body.category,
                    'quantity': req.body.quantity,
                    'price': req.body.price,
                    'quantityType': req.body.quantityType
                }
                response.success = true;
                response.message = "Item Updated SuccessFully!";
                response.data = item;
                return res.status(200).send(response);
            }

        } catch (error) {
            next(error)
        }

    };
    getAllItemsofCatalog = (req, res, next) => {
        try {
            let response = {}
            let token = req.params.token
            let catalogId = req.params.catalogId

            console.log(token + " <===> " + catalogId);

            response.success = true;
            response.message = "All items of a Catalog!";
            response.data = [];
            return res.status(200).send(response);

        } catch (error) {
            next(error)
        }

    };
    deleteItemofCatalog = (req, res, next) => {
        try {
            let response = {}
            let token = req.params.token
            let catalogId = req.params.catalogId
            let itemId = req.params.itemId
            console.log(token + " <===> " + catalogId + "<==>" + itemId);
            response.success = true;
            response.message = "Delete items of a Catalog!";
            response.data = itemId;
            return res.status(200).send(response);

        } catch (error) {
            next(error)
        }

    };
    removeItemFromCatalog = (req, res) => {
        try {
            let response = {}
            let token = req.params.token
            let catalogId = req.params.catalogId
            let itemId = req.params.itemId
            console.log(token + " <===> " + catalogId + "<==>" + itemId);
            response.success = true;
            response.message = "Remove item of a Catalog!";
            response.data = itemId;
            return res.status(200).send(response);

        } catch (error) {
            next(error)
        }

        
    }

}
module.exports=new ItemController();
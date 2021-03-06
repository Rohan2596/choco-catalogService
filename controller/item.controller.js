const itemService = require('../service/item.service')
class ItemController {

    /*
    @purpose :- Adding item to Catalog Based its Id.
    @author :- Rohan Kadam
    */
    addItemtoCatalog = (req, res, next) => {

        try {
            let response = {}
            let token = req.params.token
            let catalogId = req.params.catalogId
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
                    'quantityType': req.body.quantityType,
                    'catalogId': catalogId
                }
                itemService.addItemtoCatalog(item)
                    .then((data) => {
                        response.success = true;
                        response.message = data.message;
                        response.data = data.data;
                        return res.status(200).send(response);
                    }).catch((err) => {
                        response.success = false;
                        response.message = "Item Added Un-SuccessFully!";
                        response.data = err;
                        return res.status(404).send(response);
                    })

            }

        } catch (error) {

            next(error)
        }

    };
    /*
    @purpose :- Adding item to Catalog Based its Id.
    @author :- Rohan Kadam
    */
    editItemofCatalog = (req, res, next) => {
        try {
            let response = {}
            let token = req.params.token
            let catalogId = req.params.catalogId
            let itemId = req.params.itemId

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
                    'itemId': itemId,
                    'name': req.body.name,
                    'category': req.body.category,
                    'quantity': req.body.quantity,
                    'price': req.body.price,
                    'quantityType': req.body.quantityType
                }
                itemService.editItemtoCatalog(item)
                    .then((data) => {
                        response.success = true;
                        response.message = data.message;
                        response.data = data.data;
                        return res.status(200).send(response);
                    }).catch((err) => {
                        response.success = false;
                        response.message = "Item Updated Un-SuccessFully!";
                        response.data = err;
                        return res.status(404).send(response);
                    })
            }

        } catch (error) {
            next(error)
        }

    };

    /*
    @purpose :- Getting A item to Catalog Based its Id.
    @author :- Rohan Kadam
    */
    getAItemOfCatalog = (req, res, next) => {
        try {
            let response = {}
            let token = req.params.token
            let catalogId = req.params.catalogId
            let itemId = req.params.itemId

            let itemDto = {
                "token": token,
                "itemId": itemId
            }
            itemService.getAItemofCatalog(itemDto)
                .then((data) => {
                    response.success = true;
                    response.message = data.message;
                    response.data = data.data;
                    return res.status(200).send(response);
                }).catch((err) => {
                    response.success = false;
                    response.message = "Item Updated Un-SuccessFully!";
                    response.data = err;
                    return res.status(404).send(response);
                })
        }
        catch (error) {
            next(error)
        }
    }
    /*
    @purpose :- Getting all items of Catalog Based its Id.
    @author :- Rohan Kadam
    */
    getAllItemsofCatalog = (req, res, next) => {
        try {
            let response = {}
            let token = req.params.token
            let catalogId = req.params.catalogId
            response.success = true;
            response.message = "All items of a Catalog!";
            response.data = [];
            return res.status(200).send(response);

        } catch (error) {
            next(error)
        }

    };
    /*
    @purpose :- Deleting item to Catalog Based its Id.
    @author :- Rohan Kadam
    */
    deleteItemofCatalog = (req, res, next) => {
        try {
            let response = {}
            let token = req.params.token
            let catalogId = req.params.catalogId
            let itemId = req.params.itemId
            let itemDto = {
                "token": token,
                "catalogId": catalogId,
                "itemId": itemId
            }
            itemService.deleteItemOfCatalog(itemDto)
                .then((data) => {
                    response.success = true;
                    response.message = data.message;
                    response.data = data.data;
                    return res.status(200).send(response);
                }).catch((err) => {
                    response.success = false;
                    response.message = "Item Dto....";
                    response.data = err;
                    return res.status(404).send(response);
                })

        } catch (error) {
            next(error)
        }

    };
    /*
    @purpose :- Removing  item from Catalog Based its Id.
    @author :- Rohan Kadam
    */
    removeItemFromCatalog = (req, res) => {
        try {
            let response = {}
            let token = req.params.token
            let catalogId = req.params.catalogId
            let itemId = req.params.itemId
            let itemDto = {
                "token": token,
                "catalogId": catalogId,
                "itemId": itemId
            }
            itemService.removeItemFromCatalog(itemDto)
                .then((data) => {
                    response.success = true;
                    response.message = data.message;
                    response.data = data.data;
                    return res.status(200).send(response);
                }).catch((err) => {
                    response.success = false;
                    response.message = "Item Updated Un-SuccessFully!";
                    response.data = err;
                    return res.status(404).send(response);
                })

        } catch (error) {
            next(error)
        }


    }

}
module.exports = new ItemController();
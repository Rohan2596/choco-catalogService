const itemModel = require('../model/item.model');
class ItemService {

    addItemtoCatalog = (addItemDto, next) => {
        try {
            return itemModel.addItemtoCatalog(addItemDto)
                .then((data) => {

                    return data;
                })
                .catch((err) => {
                    return err;
                });
        } catch (error) {

            next(error)
        }
    };
    editItemtoCatalog = (editItemDto, next) => {
        try {

            return itemModel.editItemofCatalog(editItemDto)
                .then((data) => {

                    return data;
                })
                .catch((err) => {
                    return err;
                });
        } catch (error) {
            next(error)
        }
    };
    getAItemofCatalog = (getItemDto, next) => {
        try {
            return itemModel.getAItemCatalog(getItemDto)
                .then((data) => {
                    return data;
                })
                .catch((err) => {
                    return err;
                });
        } catch (error) {
            next(error)
        }
    };
    deleteItemOfCatalog = (itemDto, next) => {
        try {
            return itemModel.deleteAItemofCatalog(itemDto)
                .then((data) => {
                    return data;
                })
                .catch((err) => {
                    return err;
                })
        } catch (error) {
            next(error)
        }
    };
    removeItemFromCatalog = (itemDto, next) => {
        try {
            return itemModel.removeAItemfromCatalog(itemDto)
                .then((data) => {
                    return data;
                })
                .catch((err) => {
                    return err;
                });
        } catch (error) {
            next(error)
        }
    }


}
module.exports = new ItemService()
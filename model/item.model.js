const mongoose = require('mongoose');
const catalogModel = require('mongoose').model('catalog')
const itemSchema = new mongoose.Schema({
    'name': {
        type: String,
        required: true
    },
    'category': {
        type: String,
        required: true
    },
    'quantity': {
        type: String,
        required: true
    },
    'price': {
        type: String,
        required: true

    },
    'quantityType': {
        type: String,
        required: true

    },
    'inList': {
        type: Boolean,
        required: true

    },
    catalog: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "catalog"
    }

}, {
    timestamps: true
})

const itemModel = mongoose.model('item', itemSchema);
class ItemModel {
    addItemtoCatalog = (itemDto, next) => {
        try {
            return new Promise((resolve, reject) => {
                const item = {
                    'name': itemDto.name,
                    'category': itemDto.category,
                    'quantity': itemDto.quantity,
                    'price': itemDto.price,
                    'quantityType': itemDto.quantityType,
                    'inList': false
                }

                new itemModel(item)
                    .save()
                    .then(result => {
                        catalogModel.findOneAndUpdate(
                            {
                                '_id': itemDto.catalogId
                            }, {
                            $push: {
                                items: result._id
                            }
                        }, { new: true }
                        ).then(result => {
                            if (result) {
                                resolve({ message: 'Catalog Updated Successfully!', data: result });

                            } else {
                                reject({ message: 'Catalog Updation Failed!', data: item })
                            }
                        });
                        resolve({ message: 'Item Added Successfully!', data: result });



                    }).catch(err => {
                        console.log(err);
                        reject({ message: 'Item Addition Failed!', error: err });
                    })

            })


        } catch (error) {
            console.log(error);
            next(error);
        }
    };
    editItemofCatalog = (itemDto, next) => {
        try {
            return new Promise((resolve, reject) => {

                itemModel.findByIdAndUpdate(
                    {
                        '_id': itemDto.itemId
                    }, {
                    $set: {
                        "name": itemDto.name,
                        "category": itemDto.category,
                        "quantity": itemDto.quantity,
                        "price": itemDto.price,
                        "item": itemDto.quantityType
                    }
                }
                ).then(result => {
                    if (result) {
                        resolve({ message: 'Item of Catalog Updated Successfully!', data: result })
                    } else {
                        reject({ message: 'Item Updation Failed!', data: itemDto })
                    }
                })
            })

        } catch (error) {
            next(error)
        }
    };
    getAItemCatalog = (itemDto, next) => {
        try {
            return new Promise((resolve, reject) => {

                itemModel.findById(
                    {
                        '_id': itemDto.itemId
                    }
                ).then(result => {
                    if (result) {
                        resolve({ message: 'Item of Category Updated', data: result })
                    } else {
                        reject({ message: 'Item Updation failed.', data: itemDto })
                    }
                })
            })
        } catch (error) {
            next(error)
        }
    };

    removeAItemfromCatalog = (itemDto, next) => {
        try {
            return new Promise((resolve, reject) => {

                itemModel.findByIdAndUpdate(
                    {
                        '_id': itemDto.itemId
                    }, {
                    $set: {
                        "inList": true
                    }
                }
                ).then(result => {
                    if (result) {
                        resolve({ message: 'Item of catalog removed sucessfully!', data: result })
                    } else {
                        reject({ message: 'Item of catalog removing failed!', data: itemDto })
                    }
                })
            })

        } catch (error) {
            next(error)
        }

    }
    deleteAItemofCatalog = (itemDto, next) => {
        try {
            return new Promise((resolve, reject) => {
                catalogModel.findByIdAndUpdate({
                    '_id': itemDto.catalogId
                }, {
                    $pull: {
                        items: itemDto.itemId
                    }
                }, { new: true }).then(catalog => {
                    if (catalog) {
                        itemModel.findByIdAndDelete(
                            {
                                '_id': itemDto.itemId
                            }
                        ).then(result => {
                            if (result) {
                                resolve({ message: 'Item of catalog deleted successfully!', data: result })
                            } else {
                                reject({ message: 'Item of catalog deletion Failed', data: itemDto })
                            }
                        })
                    } else {
                        reject({ message: 'Failed to delete items!', data: catalog })
                    }
                })

            })

        } catch (error) {
            next(error)
        }


    }
}
module.exports = new ItemModel();
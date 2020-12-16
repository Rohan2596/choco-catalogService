const mongoose = require('mongoose')

const catalogSchema = new mongoose.Schema(
    {
        'name': {
            type: String,
            required: true
        },
        'category': {
            type: String,
            required: true
        },
        'customer_id': {
            type: String,
            required: true
        },
        'items': {
            type: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "item"
                }
            ]
        }
    }, {
    timestamps: true
})

const catalogModel = mongoose.model('catalog', catalogSchema)
class CatalogModel {

    createCatalog = (catalogDto, next) => {
        try {
            return new Promise((resolve, reject) => {

                let catalog = {
                    "name": catalogDto.name,
                    "category": catalogDto.category,
                    "items": [],
                    "customer_id": catalogDto.token
                }
                new catalogModel(catalog)
                    .save()
                    .then(result => {
                        resolve({ message: 'Catalog Added successfully!', data: result });
                    }).catch(err => {
                        reject({ message: 'Catalog Addition Failed!', error: err });
                    })

            })

        } catch (error) {
            next(error)

        }
    };
    updateCatalog = (catalogDto, next) => {
        try {
            return new Promise((resolve, reject) => {

                catalogModel.findByIdAndUpdate(
                    {
                        '_id': catalogDto.catalogId
                    }, {
                    $set: {
                        "name": catalogDto.name,
                        "category": catalogDto.category
                    }
                }
                ).then(result => {
                    if (result) {
                        resolve({ message: 'Catalog was updated Successfully!', data: result });

                    } else {
                        reject({ message: 'Catalog Updation Failed! ', data: result })
                    }
                })
            });



        } catch (error) {

            next(error)
        }
    };
    getCatalog = (catalogDto, next) => {
        try {
            return new Promise((resolve, reject) => {
                catalogModel.findOne(
                    {
                        '_id': catalogDto.catalogId
                    }
                )
                    .populate("items")
                    .then(result => {

                        if (result) {
                            resolve({ message: 'Catalog found :-' + catalogDto.catalogId, data: result });

                        } else {
                            reject({ message: 'No Catalog found.', data: catalogDto })
                        }
                    })
            })

        } catch (error) {
            next(error)
        }
    };
    getAllCatalog = (next) => {
        try {
            return new Promise((resolve, reject) => {
                catalogModel
                    .find()
                    .populate("items")
                    .then(
                        result => {
                            if (result) {
                                resolve({ message: 'Found all available  Catalogs!', data: result });

                            } else {
                                reject({ message: 'No Catalogs were founds!', data: "" })
                            }
                        })
            })

        } catch (error) {
            next(error)
        };
    };
    deteleCatalog = (catalogDto, next) => {
        try {
            console.log(catalogDto);
            return new Promise((resolve, reject) => {
                catalogModel.findByIdAndDelete({
                    '_id': catalogDto.catalogId
                }).then(
                    result => {
                        if (result) {
                            resolve({ message: 'Catalog Deleted Successfully.', data: result });

                        } else {
                            reject({ message: 'Catalog Delete Unsuccessfully.', data: result })
                        }
                    })
            })
        } catch (error) {
            next(error)
        }
    };






}
module.exports = new CatalogModel();
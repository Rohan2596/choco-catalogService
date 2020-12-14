const mongoose = require('mongoose');
const catalogModel = require('./catalog.model');

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
                    'quantityType': itemDto.quantityType

                }

                new itemModel(item)
                    .save()
                    .then(result => {
                        resolve({ message: 'Item Added successfully!', data: result });
                    }).catch(err => {
                        reject({ message: 'Item Addition Failed.', error: err });
                    })

            })


        } catch (error) {
            console.log(error);
            next(error);
        }
    };
    editItemofCatalog = (itemDto, next) => {
        try {
            return new Promise((resolve,reject)=>{

                itemModel.findByIdAndUpdate(
                    {
                        '_id':itemDto.itemId
                    },{
                        $set:{
                            "name":itemDto.name,
                            "category":itemDto.category,
                            "quantity":itemDto.quantity,
                            "price":itemDto.price,
                            "item": itemDto.quantityType
                        }
                    }
                ).then(result=>{
                    if(result){
                        resolve({message:'Item of Category Updated',data:result})
                    }else{
                        reject({message:'Item Updation failed.',data:itemDto})
                    }
                })
            })

        } catch (error) {
            next(error)
        }
    };
    getAItemCatalog = (itemDto, next) => {
        try {

        } catch (error) {
            next(error)
        }
    };
    getItemsOfCatalog = (itemDto, next) => {
        try {

        } catch (error) {
            next(error)
        }

    };
    removeAItemfromCatalog = (itemDto, next) => {
        try {

        } catch (error) {
            next(error)
        }
    }
    deleteAItemofCatalog = (itemDto, next) => {
        try {

        } catch (error) {
            next(error)
        }
    }
}
module.exports = new ItemModel();
const mongoose = require('mongoose')

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

        } catch (error) {
            next(error);
        }
    };
    editItemofCatalog = (itemDto, next) => {
        try {

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
    removeAItemfromCatalog=(itemDto,next)=>{
        try {
            
        } catch (error) {
            next(error)
        }
    }
    deleteAItemofCatalog=(itemDto,next)=>{
        try {
            
        } catch (error) {
            next(error)
        }
    }
}
const itemModel=require('../model/item.model');
class ItemService{

    addItemtoCatalog=(addItemDto,next)=>{
        try {
            console.log("Add iTem to catalog",addItemDto);
            return  itemModel.addItemtoCatalog(addItemDto)
            .then((data)=>{
                console.log(data);
                return data;
            })
            .catch((err)=>{
                return err;
            });
        } catch (error) {
          console.log(error);
            next(error)
        }
    };
    editItemtoCatalog=(editItemDto,next)=>{
        try {
            console.log("Edit Item to catalog",editItemDto);
            return  itemModel.editItemofCatalog(editItemDto)
            .then((data)=>{
                console.log(data);
                return data;
            })
            .catch((err)=>{
                return err;
            });
        } catch (error) {
            next(error)
        }
    };
    getAItemofCatalog=(getItemDto,next)=>{
        try {
            return  itemModel.getAItemCatalog(getItemDto)
            .then((data)=>{
                return data;
            })
            .catch((err)=>{
                return err;
            });
        } catch (error) {
            next(error)
        }
    };
    deleteItemOfCatalog=(req,next)=>{
        try {
            console.log("Delete an item from catalog",req);
        } catch (error) {
            next(error)
        }
    };
    removeItemFromCatalog=(req,next)=>{
        try {
            console.log("Remove an item from catalog",req);
        } catch (error) {
            next(error)
        }
    }
      

}
module.exports=new ItemService()
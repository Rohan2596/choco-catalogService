class SupplierController{
 
    createCatalog=(req,res,next)=>{
        try {
            let response={}
            req.checkBody('name','Please Enter Valid Catalog name!').notEmpty().isAlpha().isLength({min:'3',max:'10'});
            req.checkBody('category','Please Enter Valid Catalog category!').notEmpty().isAlpha().isLength({min:'3',max:'10'});
            let validationErrors=req.validationErrors();
            if(validationErrors){
                response.success=false;
                response.message="Invalid Credentials for catalog!";
                response.data=validationErrors[0].msg;
                return res.status(500).send(response);
            }else{
                const catalog={
                    'name':req.body.name,
                    'category':req.body.category,
                    'items':[]
                }
                response.success=true;
                response.message="Catalog Created SuccessFully!";
                response.data=catalog;
               return res.status(200).send(response);
            }
        } catch (error) {
            next(error)
        }
    };
    addItemtoCatalog=(req,res)=>{
        console.log("Adding Item to catalog");
    };
    editItemofCatalog=(req,res)=>{
        console.log("Editing Item of Catalog");
    };
    getAllItemsofCatalog=(req,res)=>{
        console.log("Getting All Item of Catalog");
    };
    deleteItemofCatalog=(req,res)=>{
        console.log("Deleting Item from  Catalog permanently.");
    };
    removeItemFromCatalog=(req,res)=>{
        console.log("Removing Item from Catalog");
    }
    


}

module.exports=new SupplierController();
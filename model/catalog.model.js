const mongoose=require('mongoose')

const catalogSchema=new mongoose.Schema(
    {
        'name':{
            type:String,
            required:true
        },
        'category':{
            type:String,
            required:true
        },
        'customer_id':{
            type:String,
            required:true
        },
        'items':{
            type:[]
        }
    },{
        timestamps:true
    })

const catalogModel=mongoose.model('catalog',catalogSchema)
class CatalogModel{

    createCatalog=(catalogDto,next)=>{
        try {
            return new Promise((resolve,reject)=>{

                 let catalog={
                     "name":catalogDto.name,
                     "category":catalogDto.category,
                     "items":[],
                     "customer_id":catalogDto.token
                 }
                 new catalogModel(catalog)
                 .save()
                 .then(result=>{
                    resolve({ message: 'Catalog Added successfully!', data: result });
                }).catch(err => {
                    reject({ message: 'Catalog Failed!', error: err });
                })

            })

        } catch (error) {
            next(error)
            
        }
    };
    updateCatalog=(catalogDto,next)=>{
        try {
            return new Promise((resolve,reject)=>{

                catalogModel.findByIdAndUpdate(
                    {
                        '_id':catalogDto.catalogId
                    },{
                        $set:{
                            "name":catalogDto.name,
                            "category":catalogDto.category
                        }
                    }
                ).then(result=>{
                    if(result){
                        resolve({message:'Category Updated',data:result});
                    
                    }else{
                        reject({message:'Category Updateed FAILED.',data:result})
                    }
                })
            });
            
    
            
        } catch (error) {
            
            next(error)
        }
    };
    getCatalog=(catalogDto,next)=>{
        try {
            return new Promise((resolve,reject)=>{
                catalogModel.findById(
                    {
                        '_id':catalogDto.catalogId
                    }
                ).then(result=>{

                    if(result){
                        resolve({message:'Get Catalog based on Id',data:result});
                    
                    }else{
                        reject({message:'No Catalog found.',data:result})
                    }
                })
            })

        } catch (error) {
            next(error)
        }
    };
    getAllCatalog=(next)=>{
        try {
            return new Promise((resolve,reject)=>{
                catalogModel.find().then(
                    result=>
                    {
                    if(result){
                        resolve({message:'Category Updated',data:result});
                    
                    }else{
                        reject({message:'Category Updateed FAILED.',data:result})
                    }
                })
            })

        } catch (error) {
            next(error)
        };
    };
    deteleCatalog=(catalogDto,next)=>{
        try {
            console.log(catalogDto);
            return new Promise((resolve,reject)=>{
                catalogModel.findByIdAndDelete({
                    '_id':catalogDto.catalogId
                }).then(
                    result=>
                    {
                    if(result){
                        resolve({message:'Catalog Deleted Successfully.',data:result});
                    
                    }else{
                        reject({message:'Catalog Delete Unsuccessfully.',data:result})
                    }
                })
            })
        } catch (error) {
            next(error)
        }
    }




}
module.exports=new CatalogModel();
import product from '../models/productSchema.js';

export const getProducts = async (req, res)=>{
    try{
        const productData = await product.find({})
        res.status(200).json({
            success : true,
            message : "Show data successfully",
            data : productData
        })
    }catch(error){
        res.status(500).json({
            success : false,
            message: error.message
        })
    }
}
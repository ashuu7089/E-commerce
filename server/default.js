import { products } from '../server/constants/data.js'
import  Product  from './models/productSchema.js'
const DefaultData = async() => {
    try{
        await Product.insertMany(products)
        console.log(`Data imported successfully`)
    }catch(error){
        console.log(error.message)
    }
}
export default  DefaultData  
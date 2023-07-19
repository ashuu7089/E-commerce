import {mongoose } from 'mongoose';

export const Connction = async()=>{
mongoose.connect(process.env.url, {useUnifiedTopology : true, useNewUrlParser : true })

const con = mongoose.connection;
con.once('open', ()=>{
    console.log("Database connection successfully")
})
}

export default Connction;

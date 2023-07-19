import express from 'express';
import dotenv from 'dotenv'
const app = express()

dotenv.config()
import  Connection  from './dbConfig.js';
import DefaultData  from './default.js';
import cors from 'cors';
import router from './routers/userRouter.js'
app.use(cors())
app.use(express.json())
app.use('/', router)

Connection()
app.listen(process.env.PORT, ()=>{
    console.log(`Server running at port No ${process.env.PORT}`)
})
DefaultData()
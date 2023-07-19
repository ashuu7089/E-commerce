import express from 'express';

import {userSignUP, userLogin} from '../controllers/userController.js'
import { getProducts } from '../controllers/productController.js';
const router=express.Router()

router.post('/signup', userSignUP)
router.post('/login', userLogin)

router.get('/products', getProducts)

export default router;
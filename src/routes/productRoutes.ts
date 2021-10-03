import express from 'express';
import { GetAllProducts, GetProductById } from '../controller/productControllers';


export const ProductRoutes = () => {
    const router = express.Router();

    /**
     * This gets all the products
     * @route GET /api/products
     * @access Public
     */
    router.get('/', GetAllProducts);

    /**
     * @desc  GET a product by id from db
     * @route GET /api/products
     * @access Public
     */
    router.get('/:id', GetProductById);
}
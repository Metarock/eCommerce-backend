import express from 'express';
import { GetAllProducts, GetProductById } from '../controller/productControllers';

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

router.get('/test', (_req: any, res: any) => {
    res.send("test")
})

module.exports = router

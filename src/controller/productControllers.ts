import { Product } from "../models/Product"
import { Request, Response } from 'express';

export const GetAllProducts = async (_req: Request, res: Response) => {
    try {
        const products = await Product.find({});


        res.json(products);
    } catch (error) {
        console.error("error in getting products", error);
        res.status(500).json({ message: "Server error" });
    }
}



export const GetProductById = async (req: Request, res: Response) => {
    try {
        const product = await Product.findById(req.params.id);


        res.json(product);
    } catch (error) {
        console.error("error in getting product", error);
        res.status(500).json({ message: "Server error" });
    }
}
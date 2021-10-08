import 'dotenv-safe/config';
import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db';
const productRoutes = require('./routes/productRoutes');

const main = async () => {
    await connectDB();

    const app = express();
    // cors
    app.use(cors({ origin: true, credentials: true }));

    app.use(express.json());

    app.get("/", (_req, res) => {
        res.json({ message: "API running..." });
    });

    app.use('/api/products', productRoutes) //creating the router

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    })
}

main().catch((err) => {
    console.log("error starting server ", err);
})
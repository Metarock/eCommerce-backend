import 'dotenv-safe/config';
import express from 'express';
import { connectDB } from './config/db';
import { ProductRoutes } from './routes/productRoutes';

const main = async () => {
    await connectDB();

    const app = express();

    app.use(express.json());


    app.use('./products', ProductRoutes) //creating the router

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    })
}

main().catch((err) => {
    console.log("error starting server ", err);
})
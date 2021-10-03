import 'dotenv-safe/config';
import { products } from './data/products';
import { connectDB } from './config/db';
import { Product } from './models/Product';




const importData = async () => {
    await connectDB();
    try {
        await Product.deleteMany({});

        await Product.insertMany(products);

        console.log("Data imported yayy");

        process.exit();
    } catch (error) {
        console.log("Data imported error ", error);
        process.exit(1);
    }
}


importData();
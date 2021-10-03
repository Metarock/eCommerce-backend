import 'dotenv-safe/config';
import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect(
            process.env.MONGO_URI
        );

        console.log('MongoDB is Connected...');
    } catch (err) {
        console.error("Connection to mongo failed ", err.message);
        process.exit(1);
    }
};

import 'dotenv-safe/config';
import express from 'express';
import { connectDB } from './config/db';

connectDB();
const app = express();


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

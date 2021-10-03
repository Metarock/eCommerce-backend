import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    name: {
        type: String, //type of data
        required: true, // input is required
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    countInStock: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
})


export const Product = mongoose.model('product', productSchema);
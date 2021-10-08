"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProductById = exports.GetAllProducts = void 0;
const Product_1 = require("../models/Product");
const GetAllProducts = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield Product_1.Product.find({});
        res.json(products);
    }
    catch (error) {
        console.error("error in getting products", error);
        res.status(500).json({ message: "Server error" });
    }
});
exports.GetAllProducts = GetAllProducts;
const GetProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield Product_1.Product.findById(req.params.id);
        res.json(product);
    }
    catch (error) {
        console.error("error in getting product", error);
        res.status(500).json({ message: "Server error" });
    }
});
exports.GetProductById = GetProductById;
//# sourceMappingURL=productControllers.js.map
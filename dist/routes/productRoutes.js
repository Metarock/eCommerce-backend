"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const productControllers_1 = require("../controller/productControllers");
const ProductRoutes = () => {
    const router = express_1.default.Router();
    router.get('/', productControllers_1.GetAllProducts);
    router.get('/:id', productControllers_1.GetProductById);
};
exports.ProductRoutes = ProductRoutes;
//# sourceMappingURL=productRoutes.js.map
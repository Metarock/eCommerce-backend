"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productControllers_1 = require("../controller/productControllers");
const router = express_1.default.Router();
router.get('/', productControllers_1.GetAllProducts);
router.get('/:id', productControllers_1.GetProductById);
router.get('/test', (_req, res) => {
    res.send("test");
});
module.exports = router;
//# sourceMappingURL=productRoutes.js.map
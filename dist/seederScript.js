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
require("dotenv-safe/config");
const products_1 = require("./data/products");
const db_1 = require("./config/db");
const Product_1 = require("./models/Product");
const importData = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, db_1.connectDB)();
    try {
        yield Product_1.Product.deleteMany({});
        yield Product_1.Product.insertMany(products_1.products);
        console.log("Data imported yayy");
        process.exit();
    }
    catch (error) {
        console.log("Data imported error ", error);
        process.exit(1);
    }
});
importData();
//# sourceMappingURL=seederScript.js.map
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ScraperService_1 = __importDefault(require("../services/ScraperService"));
const router = (0, express_1.Router)();
const documentation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return res.send(`
            <h4>/getAllRestaurantsInArea</h4> <p>lat, long</p>
            <h4>/getProductsFromRestaurantID</h4> <p>restaurantID</p>
            <h4>/getAllProductsInArea</h4> <p>lat, long</p>
            <h4>/findByKeyword</h4> <p>lat, long, keyword</p>

            `);
    }
    catch (error) {
        console.log(error);
        return res.status(400).send("create error");
    }
});
const getProductsFromRestaurantID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const restaurantID = req.query.restaurantID;
        if (restaurantID == "" || restaurantID == undefined) {
            return res.status(400).send("restaurantID is required");
        }
        const data = yield ScraperService_1.default.getProductsFromRestaurantID(restaurantID);
        return res.send(data);
    }
    catch (error) {
        console.log(error);
        return res.status(400).send("error trying to get");
    }
});
// yo
// const lat = -34.889193115357536;
// const long = -56.12538239402184;
// // gaby
// const lat = -34.8983355;
// const long = -56.1306521;
// // centro
// const lat = -34.9056850;
// const long = -56.1865991;
// // chuy
// const lat = -33.6978192;
// const long = -53.4625693;
const getAllRestaurantsInArea = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const lat = req.query.lat;
        const long = req.query.long;
        if (lat == "" || lat == undefined || long == "" || long == undefined) {
            return res.status(400).send("lat & long are required");
        }
        const data = yield ScraperService_1.default.getAllRestaurantsInArea(Number(lat), Number(long));
        return res.send(data);
    }
    catch (error) {
        console.log(error);
        return res.status(400).send("error trying to get");
    }
});
const getAllProductsInArea = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const lat = req.query.lat;
        const long = req.query.long;
        if (lat == "" || lat == undefined || long == "" || long == undefined) {
            return res.status(400).send("lat & long are required");
        }
        const restaurantes = yield ScraperService_1.default.getAllRestaurantsInArea(Number(lat), Number(long));
        const restaurantesId = restaurantes.map((restaurante) => restaurante.restaurantId);
        const productData = yield ScraperService_1.default.getProductsFromRestaurantID(restaurantesId);
        const data = restaurantes.map((restaurante) => {
            return Object.assign(Object.assign({}, restaurante), { products: productData[restaurante.restaurantId] });
        });
        return res.send(data);
    }
    catch (error) {
        console.log(error);
        return res.status(400).send("error trying to get");
    }
});
const findByKeyword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const lat = req.query.lat;
        const long = req.query.long;
        const keyword = req.query.keyword;
        if (lat == "" ||
            lat == undefined ||
            long == "" ||
            long == undefined ||
            keyword == "" ||
            keyword == undefined) {
            return res.status(400).send("keyword, lat & long are required");
        }
        const restaurantes = yield ScraperService_1.default.getAllRestaurantsInArea(Number(lat), Number(long));
        const restaurantesId = restaurantes.map((restaurante) => restaurante.restaurantId);
        const data = yield ScraperService_1.default.getProductsFromRestaurantID(restaurantesId);
        data.filter((product) => {
            return product.nombre.toLowerCase().includes(keyword.toLowerCase());
        });
        return res.send(data);
    }
    catch (error) {
        console.log(error);
        return res.status(400).send("error trying to get");
    }
});
const test = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield ScraperService_1.default.test();
        return res.send(data);
    }
    catch (error) {
        console.log(error);
        return res.status(400).send("error trying to get");
    }
});
router.get("/", documentation);
router.get("/getProductsFromRestaurantID", getProductsFromRestaurantID);
router.get("/getAllRestaurantsInArea", getAllRestaurantsInArea);
router.get("/getAllProductsInArea", getAllProductsInArea);
router.get("/findByKeyword", findByKeyword);
router.get("/test", test);
exports.default = router;
//# sourceMappingURL=ScraperController.js.map
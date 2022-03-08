"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const DatabaseService = __importStar(require("../services/DatabaseService"));
const router = (0, express_1.Router)();
const saveRestaurantInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const restaurantID = req.query.restaurantID;
        if (restaurantID == "" || restaurantID == undefined) {
            return res.status(400).send("restaurantID is required");
        }
        const data = yield ScraperService_1.default.getProductsFromRestaurantID(restaurantID);
        // voy a precisar los datos del restaurante mismo antes de hacer esta llamada, capaz que pasar a post y usar los datos de la otra query
        yield DatabaseService.saveRestaurante(data);
        return res.send(data);
    }
    catch (error) {
        console.log(error);
        return res.status(400).send("error trying to get");
    }
});
exports.default = router;
//# sourceMappingURL=DatabaseController.js.map
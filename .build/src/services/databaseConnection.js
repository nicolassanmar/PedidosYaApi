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
const mongodb_1 = require("mongodb");
// Create a module-scoped MongoClient promise.
// CRITICAL: You must call connect() outside the handler so that the client
// can be reused across function invocations.
let client = new mongodb_1.MongoClient(process.env.DB_CONN_STRING);
const clientPromise = client.connect();
// Handler
module.exports.handler = function (event, context) {
    return __awaiter(this, void 0, void 0, function* () {
        // Get the MongoClient by calling await on the promise.
        // Because this is a promise, it will only resolve once.
        client = yield clientPromise;
        // Use the client to return the name of the connected database.
        return client.db(process.env.DB_NAME).collection("restaurantes");
    });
};
//# sourceMappingURL=databaseConnection.js.map
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
const axios_1 = __importDefault(require("axios"));
const productImageBaseUrl = "https://images.deliveryhero.io/image/pedidosya/products/";
const restaurantImageBaseUrl = "https://images.deliveryhero.io/image/pedidosya/restaurants/";
const cookie = "dhhPerseusGuestId=1642999410659.710704512111235200.6xjmlvjajj3; dhhPerseusSessionId=1642999410659.623276007923828200.2c2e143prwu; __Secure-peya.sid=s:90964a71-325a-4f65-aad6-b518c2ead934.yQa1HYDVdWFjI3QZpzxuyBLn0Iqp1Oa0pKsgHLAlcwc; __Secure-peyas.sid=s:10415955-2457-4bbf-806b-50d8c1c9a4c9.bO5M27s6Cos4xvG0PnOKfP1h+MbR4g7bB3P+Tbd/zfM; _pxhd=yWCrGe5PKs6ZPEx8LDUzr8olj3lnH28K2lWA88uqm2zgW1Vmu22yiml6H1WOAlddnTJru6gEm/hjhH9pkirCdw==:F2Jh7IZsMvsflH75uaUreQTyOEb9zLx3oYhJUCSjF4hZHcvX0FsDxUaWWPWIe6-dkgazeM-q-R5fA3h-V6y9TJdEGUGNFFchc9Kf9pku2p4=; pxcts=2f18cc0c-7cd0-11ec-aa29-767873767977; _pxvid=2dc6c0e1-7cd0-11ec-b1e2-754d69665447; _gcl_au=1.1.95780580.1642999416; _hjFirstSeen=1; _hjSession_2285482=eyJpZCI6Ijg3MzYzZjExLTZmZjUtNDM3Mi05YWQ3LTdiZjcyMDlkNTIzNSIsImNyZWF0ZWQiOjE2NDI5OTk0MTg5ODIsImluU2FtcGxlIjp0cnVlfQ==; _hjAbsoluteSessionInProgress=1; _fbp=fb.2.1642999419009.2029500395; _ga=GA1.3.726930454.1642999419; _gid=GA1.3.195439417.1642999419; _hjSessionUser_2285482=eyJpZCI6IjA5MTRkNzI1LThlN2QtNTc0NC1hYzdiLWY1MjIxYjRkMjVlYyIsImNyZWF0ZWQiOjE2NDI5OTk0MTg5NTQsImV4aXN0aW5nIjp0cnVlfQ==; __cf_bm=5zFNkCOJQJT_3aKatzznTyb8OwFT1opkS7M8E9VBvhw-1643002707-0-Abx9zq7BRmYjY5FvUPBjE1LAZHQvOcaOF+P9NwzfuG+MvLWfVIccFRifkhQ+LO3agPv8aaRTGgBDmTp5WBhG+Fo=; _gat_WD2_Tracker_PeYa_Prod=1; _hjIncludedInPageviewSample=1; dhhPerseusHitId=1643003575024.478880007993911040.d94ysnrd2q8; _tq_id.TV-81819090-1.49d8=b087746ef2bb2a26.1642999419.0.1643003578..; _px3=3bc485c986b363c0d5229161f0443ca89f87084915b8ecd2f7b7ba6ded2d1d2b:f6Y+XtC9h+omaFWz6XTK8lh5Cp5ZzwWoUA6Cc2RHI0XMlNRt5hInaDALe3CUFECJh4E4/DPENyguv3595LxriA==:1000:frs8jnPq2obPzz9yIOUszfKbSi9g2mtzLnRLWGmpJ73yk8w8cFo6r+fAKK/1fDedH1+kFvF/zM5lXPRQ+FLyM+hTh7bk/xWzkLisP6zTbf2hzRdLjbWRoDP8H6idsOFGl2TMIRLoNEssg5gAPa3/tz03EyUepTNkJ1Y5ofmNoTbrY5/Oo/jYA461J6VSZ0+bCKZBF+PRA5pu1nBsK4liCw==";
const defaultHeaders = {
    Accept: "application/json",
    Host: "www.pedidosya.com",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",
    Pragma: "no-cache",
    "Accept-Language": "en-US,en;q=0.5",
    TE: "Trailers",
    "Upgrade-Insecure-Requests": 1,
    Authority: "www.pedidosya.com",
    "accept-language": "es-419,es;q=0.9",
    "sec-fetch-site": "same-origin",
    "sec-fetch-mode": "cors",
    "sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="97", "Chromium";v="97"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "Windows",
    "sec-fetch-dest": "empty",
};
const getProductsFromRestaurantID = (restaurantID) => __awaiter(void 0, void 0, void 0, function* () {
    if (restaurantID instanceof Array) {
        return getProductsFromRestaurantIDs(restaurantID);
    }
    const headers = Object.assign(Object.assign({}, defaultHeaders), { Cookie: cookie });
    // console.log(cookie);
    const data = yield axios_1.default.get(`https://www.pedidosya.com.uy/v2/niles/partners/${restaurantID}/menus?isJoker=false&occasion=DELIVERY`, {
        headers: headers,
    });
    //console.log(data.data);
    const nombreRestaurante = data.data.name;
    console.log(nombreRestaurante);
    const productosPorSeccion = data.data.sections.map((section) => {
        const products = section.products.map((producto) => {
            return {
                nombre: producto.name,
                precio: producto.price.finalPrice,
                descripcion: producto.description,
                imagenes: producto.images.urls,
                seccion: section.name,
            };
        });
        return products;
    });
    return {
        restaurantID,
        products: productosPorSeccion.flat(),
    };
});
const wait = (ms) => new Promise((res) => setTimeout(res, ms));
const callWithRetry = (fn, depth = 1, param) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield fn(param);
    }
    catch (e) {
        if (depth > 7) {
            throw e;
        }
        yield wait(Math.pow(2, depth) * 10 + 20 * Math.random());
        return callWithRetry(fn, depth + 1, param);
    }
});
const getProductsFromRestaurantIDs = (restaurantIDs) => __awaiter(void 0, void 0, void 0, function* () {
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));
    const promises = restaurantIDs.map((restaurantID) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            return yield getProductsFromRestaurantID(restaurantID);
        }
        catch (e) {
            yield delay(Math.random() * 50);
            return yield callWithRetry(getProductsFromRestaurantID, 0, restaurantID);
        }
    }));
    // const productos = await batchPromises(
    //   2,
    //   restaurantIDs,
    //   (i: any) =>
    //     new Promise((resolve, reject) => {
    //       // The iteratee will fire after each batch resulting in the following behaviour:
    //       // @ 100ms resolve items 1 and 2 (first batch of 2)
    //       // @ 200ms resolve items 3 and 4 (second batch of 2)
    //       // @ 300ms resolve remaining item 5 (last remaining batch)
    //       setTimeout(() => {
    //         getProductsFromRestaurantID(i);
    //       }, 100);
    //     })
    // );
    // return productos;
    // they resolve all at once
    const productosPorRestaurante = yield Promise.all(promises);
    const productosIndexados = {};
    productosPorRestaurante.forEach((producto) => {
        productosIndexados[producto.restaurantID] = producto.products;
    });
    return productosIndexados;
    // resolve promises 25 at a time
    // const requestsAtATime = 25;
    // const waitMs = 500;
    // const productosPorRestaurante: any[] = [];
    // let i = 0;
    // const allPromises: Promise<any>[][] = [];
    // while (i < restaurantIDs.length) {
    //   const promises25: Promise<any>[] = [];
    //   for (let j = 0; j < requestsAtATime && i < restaurantIDs.length; j++) {
    //     promises25.push(promises[i]);
    //     i++;
    //   }
    //   allPromises.push(promises25);
    // }
    // async function batchRequestsAtMs(i: number) {
    //   const productosPorRestaurante5 = await Promise.all(allPromises[i]);
    //   productosPorRestaurante.push(...productosPorRestaurante5);
    //   if (i < allPromises.length) {
    //     setTimeout(async () => {
    //       i++;
    //       return await batchRequestsAtMs(i);
    //     }, waitMs);
    //   } else return 0;
    // }
    // batchRequestsAtMs(0).then(() => {
    //   return productosPorRestaurante;
    // });
});
const getAllRestaurantsInArea = (lat, long) => __awaiter(void 0, void 0, void 0, function* () {
    const max = 2000;
    const offset = 0;
    const point = String(lat) + "%2C" + String(long);
    const restaurantesUrl = `https://www.pedidosya.com.uy/mobile/v5/shopList?businessType=RESTAURANT&country=1&includePaymentMethods=VisaNet%2COCA%2CMastercard%20UY%2CTicket%20Restaurant%20Online%2CTicket%20Alimentaci%C3%B3n%20Online%2CCreditel%20UY%2CSpreedly%20UY&max=${max}&offset=${offset}&point=${point}&sortBy=default&withFilters=true`;
    const headers = Object.assign(Object.assign({}, defaultHeaders), { Cookie: cookie });
    // console.log(cookie);
    const data = yield axios_1.default.get(restaurantesUrl, {
        headers: headers,
    });
    const restaurantes = data.data.list.data.map((restaurante) => {
        const datosRestaurante = {
            name: restaurante.name,
            restaurantId: restaurante.id,
            deliveryTimeMaxMinutes: restaurante.deliveryTimeMaxMinutes,
            deliveryTimeMinMinutes: restaurante.deliveryTimeMinMinutes,
            opened: restaurante.opened,
            generalScore: restaurante.generalScore,
            link: restaurante.link,
            nextHour: restaurante.nextHour,
            nextHourClose: restaurante.nextHourClose,
            shippingAmount: restaurante.shippingAmount,
            logo: restaurante.logo,
            products: undefined,
        };
        return datosRestaurante;
    });
    console.log(restaurantes.length + " restaurantes encontrados");
    return restaurantes;
});
const test = () => __awaiter(void 0, void 0, void 0, function* () {
    const headers = Object.assign(Object.assign({}, defaultHeaders), { Cookie: cookie });
    // console.log(cookie);
    const data1 = yield axios_1.default.get(`https://www.pedidosya.com.uy/v2/niles/partners/62501/menus?isJoker=false&occasion=DELIVERY`, {
        headers: headers,
    });
    const data2 = yield axios_1.default.get(`https://www.pedidosya.com.uy/v2/niles/partners/277234/menus?isJoker=false&occasion=DELIVERY`, {
        headers: headers,
    });
    return [data1.data, data2.data];
});
exports.default = {
    getProductsFromRestaurantID,
    getAllRestaurantsInArea,
    test,
};
//# sourceMappingURL=ScraperService.js.map
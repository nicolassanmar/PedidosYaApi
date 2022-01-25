import { Request, Response, Router } from "express";
import ScraperService from "../services/ScraperService";
const router = Router();

const listRestaurantUrls = async (req: Request, res: Response) => {
    try {
        // const siteUrl = req.query.siteUrl;
        // if (siteUrl == "" || siteUrl == undefined) {
        //     return res.status(400).send("siteUrl is required");
        // }
        // const restaurantUrls = await ScraperService.getProductsFromRestaurantCookie(String(siteUrl));
        // return res.send(restaurantUrls);
        const data = await ScraperService.getMultipleRestaurantProducts([""]);
        return res.send(data);
    } catch (error) {
        console.log(error);
        return res.status(400).send("create error");
      }
    
};

const getProductsFromRestaurantID = async (req: Request, res: Response) => {
    try {
        const restaurantID = req.query.restaurantID;
        if (restaurantID == "" || restaurantID == undefined) {
            return res.status(400).send("restaurantID is required");
        }
        const data = await ScraperService.getProductsFromRestaurantCookie( "https://www.pedidosya.com.uy/restaurantes/montevideo/mila-house-menu?origin=shop_list", Number(restaurantID));
        return res.send(data);
    } catch (error) {
        console.log(error);
        return res.status(400).send("error trying to get");
      }
};





const getAllRestaurantsInArea = async (req: Request, res: Response) => {
    try {
        // const lat = req.query.lat;
        // const long = req.query.long;
        // if (lat == "" || lat == undefined || long == "" || long == undefined) {
        //     return res.status(400).send("lat & long are required");
        // }
        const data = await ScraperService.getAllRestaurantsInArea();
        return res.send(data);
    } catch (error) {
        console.log(error);
        return res.status(400).send("error trying to get");
      }

};


router.get("/", listRestaurantUrls);
router.get("/getProductsFromRestaurantID", getProductsFromRestaurantID);
router.get("/getAllRestaurantsInArea", getAllRestaurantsInArea);

export default router;

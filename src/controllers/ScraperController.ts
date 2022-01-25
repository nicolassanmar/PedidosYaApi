import { Request, Response, Router } from "express";
import ScraperService from "../services/ScraperService";
const router = Router();

const documentation = async (req: Request, res: Response) => {
  try {
    return res.send(
      `
            <h4>/getAllRestaurantsInArea</h4> <p>lat, long</p>
            <h4>/getProductsFromRestaurantID</h4> <p>restaurantID</p>
            `
    );
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
    const data = await ScraperService.getProductsFromRestaurantID(
      restaurantID as string
    );
    return res.send(data);
  } catch (error) {
    console.log(error);
    return res.status(400).send("error trying to get");
  }
};

// yo
const lat = -34.889193115357536;
const long = -56.12538239402184;

// // gaby
// const lat = -34.8983355;
// const long = -56.1306521;

// // centro
// const lat = -34.9056850;
// const long = -56.1865991;

// // chuy
// const lat = -33.6978192;
// const long = -53.4625693;

const getAllRestaurantsInArea = async (req: Request, res: Response) => {
  try {
    // const lat = req.query.lat;
    // const long = req.query.long;
    // if (lat == "" || lat == undefined || long == "" || long == undefined) {
    //     return res.status(400).send("lat & long are required");
    // }
    const data = await ScraperService.getAllRestaurantsInArea(lat, long);
    return res.send(data);
  } catch (error) {
    console.log(error);
    return res.status(400).send("error trying to get");
  }
};

router.get("/", documentation);
router.get("/getProductsFromRestaurantID", getProductsFromRestaurantID);
router.get("/getAllRestaurantsInArea", getAllRestaurantsInArea);

export default router;

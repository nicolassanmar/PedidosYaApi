import { Request, Response, Router } from "express";
import ScraperService from "../services/ScraperService";
import * as DatabaseService from "../services/DatabaseService";

const router = Router();

const saveRestaurantInfo = async (req: Request, res: Response) => {
  try {
    const restaurantID = req.query.restaurantID;
    if (restaurantID == "" || restaurantID == undefined) {
      return res.status(400).send("restaurantID is required");
    }
    const data = await ScraperService.getProductsFromRestaurantID(
      restaurantID as string | string[]
    );

    // voy a precisar los datos del restaurante mismo antes de hacer esta llamada, capaz que pasar a post y usar los datos de la otra query

    await DatabaseService.saveRestaurante(data);
    return res.send(data);
  } catch (error) {
    console.log(error);
    return res.status(400).send("error trying to get");
  }
};

export default router;

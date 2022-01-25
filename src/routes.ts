import { Request, Response, Router } from "express";
import ScraperController from "./controllers/ScraperController";

const router = Router();

router.get("/", (req: Request, res: Response): void => {
  res.send("/scraper for scraping restaurant urls");
});

router.use("/scraper", ScraperController);

export default router;

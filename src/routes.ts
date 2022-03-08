import express, { Request, Response, Router } from "express";
import ScraperController from "./controllers/ScraperController";
// import DatabaseController from "./controllers/DatabaseController";

const router = Router();
router.use(express.json());
router.get("/", (req: Request, res: Response): void => {
  res.send("/scraper for scraping restaurant urls");
});

router.use("/scraper", ScraperController);
// router.use("/db", DatabaseController);
export default router;

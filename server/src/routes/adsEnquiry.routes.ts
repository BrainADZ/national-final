import { Router } from "express";
import { createAdsEnquiry } from "../controllers/adsEnquiry.controller";
import { upload } from "../middleware/upload.middleware";

const router = Router();

router.post("/", upload.single("drawing"), createAdsEnquiry);

export default router;

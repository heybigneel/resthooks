import { Router } from "express";
import { createEvent } from "../controllers/event.controller";

const router = Router();

router.route("/event").post(createEvent);

export default router;

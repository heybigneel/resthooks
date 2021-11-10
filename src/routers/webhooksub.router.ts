import { Router } from "express";
import { createWebhookSub } from "../controllers/webhooksub.controller";

const router = Router();

router.route("/webhooksub").post(createWebhookSub);

export default router;

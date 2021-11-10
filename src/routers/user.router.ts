import { Router } from "express";
import { createUser } from "../controllers/user.controller";

const router = Router();

router.route("/user").post(createUser);

export default router;

import { Router } from "express";
import { createNote } from "../controllers/note.controller";

const router = Router();

router.route("/note").post(createNote);

export default router;

import express from "express";
import type { Express, Request, Response } from "express";
import mongoose from "mongoose";
import UserRouter from "./routers/user.router";
import NoteRouter from "./routers/note.router";
import EventRouter from "./routers/event.router";
import WebhookSubRouter from "./routers/webhooksub.router";
import { listen } from "./utils/subscriber";

const app: Express = express();

(async () => {
  await mongoose.connect("mongodb://localhost:27017/resthooks");
})();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(UserRouter);
app.use(NoteRouter);
app.use(EventRouter);
app.use(WebhookSubRouter);

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello From Emitter");
});

app.listen(3001, () => {
  console.log("Emitter started on port 3001");
});

listen();

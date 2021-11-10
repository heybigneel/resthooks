import Note from "../models/note.model";
import type { Request, Response } from "express";
import Redis from "ioredis";
import mongoose from "mongoose";
import { getEventInternal } from "../controllers/event.controller";

export const createNote = async (req: Request, res: Response) => {
  const redis = new Redis();
  try {
    const user = req.headers["user-id"];
    const userId = new mongoose.Types.ObjectId(user as string);
    const note = await Note.create({ ...req.body, userId });
    const event = await getEventInternal("Create Note");
    const message = {
      userId: userId,
      data: note,
      event: event,
    };
    await redis.publish("events", JSON.stringify(message));
    res.status(200).json({
      success: true,
      data: note,
    });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

import WebhookSub from "../models/webhooksub.model";
import type { Request, Response } from "express";
import mongoose from "mongoose";

export const createWebhookSub = async (req: Request, res: Response) => {
  try {
    const user = req.headers["user-id"];
    const event = req.headers["event-id"];
    const userId = new mongoose.Types.ObjectId(user as string);
    const eventId = new mongoose.Types.ObjectId(event as string);
    const webhookSub = await WebhookSub.create({
      ...req.body,
      userId,
      eventId,
    });
    res.status(200).json({
      success: true,
      data: webhookSub,
    });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const getWebhookSubInternal = async (
  userId: mongoose.Types.ObjectId,
  eventId: mongoose.Types.ObjectId
) => {
  try {
    const webhookSub = await WebhookSub.findOne({
      userId: userId,
      eventId: eventId,
    });
    return webhookSub;
  } catch (e) {
    console.error(e);
  }
};

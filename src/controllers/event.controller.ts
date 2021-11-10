import Event from "../models/event.model";
import type { Request, Response } from "express";

export const createEvent = async (req: Request, res: Response) => {
  try {
    const event = await Event.create({ ...req.body });
    res.status(200).json({
      success: true,
      data: event,
    });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const getEventInternal = async (eventName: string) => {
  try {
    const event = await Event.findOne({ eventName: eventName });
    return event;
  } catch (e) {
    console.error(e);
  }
};

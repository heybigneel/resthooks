import User from "../models/user.model";
import type { Request, Response } from "express";

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await User.create({ ...req.body });
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

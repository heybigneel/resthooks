import Redis from "ioredis";
import type { Redis as IRedis } from "ioredis";
import { getWebhookSubInternal } from "../controllers/webhooksub.controller";
import mongoose from "mongoose";

const sub: IRedis = new Redis();

export const listen = async () => {
  sub.subscribe("events", (err, _) => {
    if (err) return console.error(err.message);
  });

  sub.on("message", async (channel, message) => {
    console.log("Message received from channel: " + channel);
    const res = JSON.parse(message);
    // TODO: check if event is subscribable
    // if yes, then check if there exists a webhooksub for the user
    // if yes, send the corresponding message to the targetURL
    if (res.event.isSubscribable) {
      const userId = new mongoose.Types.ObjectId(res.userId);
      const eventId = new mongoose.Types.ObjectId(res.event._id);
      const webhookSub = await getWebhookSubInternal(userId, eventId);
      console.log(webhookSub);
    }
  });
};

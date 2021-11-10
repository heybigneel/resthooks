import { Document, model, Schema } from "mongoose";
import { IEvent } from "./event.model";
import { IUser } from "./user.model";

export interface IWebhookSub extends Document {
  userId: IUser["_id"];
  eventId: IEvent["_id"];
  eventName: string;
  targetURL: string;
  createdAt: Date;
  updatedAt: Date;
}

const webhookSubSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  eventId: {
    type: Schema.Types.ObjectId,
    ref: "Event",
  },
  eventName: {
    type: String,
    require: true,
  },
  targetURL: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

const WebhookSub = model<IWebhookSub>("WebhookSub", webhookSubSchema);

export default WebhookSub;

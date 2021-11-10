import { Document, model, Schema } from "mongoose";

export interface IEvent extends Document {
  eventName: string;
  isSubscribable: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const eventSchema = new Schema({
  eventName: {
    type: String,
    require: true,
  },
  isSubscribable: {
    type: Boolean,
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

const Event = model<IEvent>("Event", eventSchema);

export default Event;

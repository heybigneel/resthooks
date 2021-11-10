import { Document, model, Schema } from "mongoose";
import { IUser } from "./user.model";

export interface INote extends Document {
  userId: IUser["_id"];
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

const noteSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    require: true,
  },
  description: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

const Note = model<INote>("Note", noteSchema);

export default Note;

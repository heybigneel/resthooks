import { Document, model, Schema } from "mongoose";

export interface IUser extends Document {
  userName: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema({
  userName: {
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

const User = model<IUser>("User", userSchema);

export default User;

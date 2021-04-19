import mongoose from "mongoose";
import User from "../../../client/src/models/User.d";
export default interface UserDocument extends User, mongoose.Document {
  comparePassword: (password: string) => Promise<Boolean>;
}

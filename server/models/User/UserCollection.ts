import bcrypt from "bcrypt";
import mongoose, {Model, Schema} from "mongoose";
import UserDocument from "./UserDocument";
export const userSchema = new Schema<UserDocument>(
  {
    email: {type: String, unique: true},
    password: String,
    name: {type: String},
    cart: {type: Array},
    isAdmin: {type: Boolean, default: false},
  },
  {timestamps: true}
);

userSchema.methods.comparePassword = async function (
  password: string
): Promise<Boolean | undefined> {
  if (this.password) {
    return await bcrypt.compare(password, this.password);
  }
};

/**
 * Password hashing & Signing Url middleware.
 */
userSchema.pre<UserDocument>("save", async function (next) {
  const user = this;

  if (!user.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;

  next();
});

const UserCollection: Model<UserDocument> = mongoose.model("User", userSchema);
export default UserCollection;

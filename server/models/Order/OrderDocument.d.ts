import mongoose from "mongoose";
import Order from "../../../client/src/models/Order";
export default interface OrderDocument extends Order, mongoose.Document {}

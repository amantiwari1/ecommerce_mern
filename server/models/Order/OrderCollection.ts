import mongoose, {Model, Schema} from "mongoose";
import OrderDocument from "./OrderDocument";
 

export const OrderSchema = new Schema<OrderDocument>(
  {
    cart: {type: Array, required: true},
    total: {type: Number, required: true},
    user: {type: Schema.Types.ObjectId, ref: "User"},
  },
  {timestamps: true}
);

const OrderCollection: Model<OrderDocument> = mongoose.model(
  "Order",
  OrderSchema
);
export default OrderCollection;

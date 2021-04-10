import mongoose from "mongoose";
import Product from "../../../client/src/models/Product";
export default interface ProductDocument extends Product, mongoose.Document {

}
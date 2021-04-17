import mongoose, { Model, Schema } from "mongoose";
import ProductDocument from './ProductDocument'

export const ProductSchema = new Schema<ProductDocument>( 
    {
        title: { type: String, required: true },
        titleslug: { type: String, required: true, unique: true},
        description: { type: String, required: true},
        price: { type: Number, required: true},
        featureImage: { type: String, required: true},
        ImageArray: { type: Array, required: true},
        category: { type: String, required: true},
    },
    { timestamps: true }
  );

const ProductCollection: Model<ProductDocument> = mongoose.model("Product", ProductSchema);
export default ProductCollection;
  
import { NextFunction, Request, RequestHandler, Response } from "express";
import ProductDocument from "../models/Product/ProductDocument";
import ProductCollection from "../models/Product/ProductCollection";
import { validationErrorResponse } from "./ulits";
import { validationResult } from "express-validator";


export const create: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {


    const invalid: Response | false = validationErrorResponse(
      res,
      validationResult(req)
    );
    if (invalid) {
      return invalid;
    }
  
    const titleslug  = req.body.titleslug
  
    const isExistTitleSlug = await ProductCollection.exists({titleslug: titleslug})
  
  
    
    if (isExistTitleSlug) {
      throw new Error("Already Title Exists");
    }
    
    
  
    const product: ProductDocument = new ProductCollection({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      featureImage: req.body.featureImage,
      ImageArray: req.body.ImageArray,
      category: req.body.category,
      titleslug: titleslug,
    });
      const saved = await product.save();
      return res.status(201).json(saved);
    
  } 
  


export const getProducts: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    const AllProduct = await ProductCollection.find();
    return res.status(200).json(AllProduct);

};

export const getProductCategory: RequestHandler = async (
  req: Request,
  res: Response, 
  next: NextFunction
) => {
    const category = req.query.category
    const AllProductCategory = await ProductCollection.find().where({ category: category})
    return res.status(200).json(AllProductCategory)
}
export const getProduct: RequestHandler = async (
  req: Request,
  res: Response, 
  next: NextFunction
) => {
    const titleslug = req.params.titleslug

    const isExistTitleSlug = await ProductCollection.exists({titleslug: titleslug})
  
  
    
    if (!isExistTitleSlug) {
      throw new Error("not found");
    }
    

    const Product = await ProductCollection.findOne({ titleslug: titleslug})
    return res.status(200).json(Product)
}
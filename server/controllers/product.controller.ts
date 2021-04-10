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

  const product: ProductDocument = new ProductCollection({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    featureImage: req.body.featureImage,
    ImageArray: req.body.ImageArray,
    category: req.body.category,
  });

  try {
    const saved = await product.save();
    return res.status(200).json(saved);
  } catch (error) {
    return next(error);
  }
};

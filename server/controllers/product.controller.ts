import { Request, RequestHandler, Response } from "express";
import ProductDocument from "../models/Product/ProductDocument";
import ProductCollection from "../models/Product/ProductCollection";
import { validationErrorResponse } from "./ulits";
import { validationResult } from "express-validator";
import path from "path";
import fs from "fs"


interface UpdateProduct {
title: string;
description: string;
price: string;
category: string;
$push?: any;
featureImage?: string;
}


// ===================================================================
// create
// ===================================================================

export const create: RequestHandler = async (req: Request, res: Response) => {
  const invalid: Response | false = validationErrorResponse(
    res,
    validationResult(req)
  );
  if (invalid) {
    return invalid;
  }
  const file: any = req.files;



  const featureImage = `${req.body.folder.toString()}/${
    file.featureImage[0].filename
  }`;

  


  const ImageArray = file.ImageArray.map((file: any) => {
    return `${req.body.folder.toString()}/${file.filename}`;
  });

  const titleslug = req.body.titleslug;

  const isExistTitleSlug = await ProductCollection.exists({
    titleslug: titleslug,
  });

  if (isExistTitleSlug) {
    throw new Error("Already Title Exists");
  }

  const product: ProductDocument = new ProductCollection({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    featureImage: featureImage,
    ImageArray: ImageArray,
    category: req.body.category,
    titleslug: titleslug,
  });
  const saved = await product.save();
  return res.status(201).json(saved);
};



// ===================================================================
// getProducts
// ===================================================================


export const getProducts: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const AllProduct = await ProductCollection.find();
  return res.status(200).json(AllProduct);
};

// ===================================================================
// getProductCategory
// ===================================================================
export const getProductCategory: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const category = req.query.category;
  const AllProductCategory = await ProductCollection.find().where({
    category: category,
  });
  return res.status(200).json(AllProductCategory);
};

// ===================================================================
// getProduct
// ===================================================================

export const getProduct: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const titleslug = req.params.titleslug;

  const isExistTitleSlug = await ProductCollection.exists({
    titleslug: titleslug,
  });

  if (!isExistTitleSlug) {
    throw new Error("not found");
  }

  const Product = await ProductCollection.findOne({ titleslug: titleslug });
  return res.status(200).json(Product);
};


// ===================================================================
// updateProduct
// ===================================================================

export const updateProduct: RequestHandler = async (
  req: Request,
  res: Response
) => {

  const file: any = req.files;



  
  const updateProduct: UpdateProduct = {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
  };


 if (file.ImageArray) {
   const ImageArray = file.ImageArray.map((file: any) => {
     return `${req.body.folder.toString()}/${file.filename}`;
   });
   updateProduct.$push = { "ImageArray" : ImageArray}
 }

 if (file.featureImage) {
        const featureImage = `${req.body.folder.toString()}/${file.featureImage[0].filename}`;
        updateProduct.featureImage = featureImage
 }

  
  const updated = await ProductCollection.findByIdAndUpdate(
    { _id: req.body._id },
    updateProduct,
    {new: true}
  ).exec();


  
  return res
    .status(200)
    .json(updated);
};

// ===================================================================
// deleteProduct
// ===================================================================


export const deleteProduct: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const deleteProduct = await ProductCollection.findByIdAndDelete(
    req.params.id
  );

    if (deleteProduct) {

      const folder = deleteProduct.featureImage.split("/")[0]

      const dir = path.join(__dirname, "..", "images", folder)


      fs.rmdirSync(dir, { recursive: true 
      })
      
    }

  return res.status(200).json("deleted product");
};

// ===================================================================
// deleteImageProduct
// ===================================================================

export const deleteImageProduct: RequestHandler = async (req: Request, res: Response) => {


  
  const deleteImage = await ProductCollection.updateOne({
    _id: req.params.id
  }, {
    "$pull": {"ImageArray": `${req.params.folder}/${req.params.filename}`}
  }).exec();

  const file = path.join(__dirname, "..", "images", req.params.folder, req.params.filename)

    fs.unlinkSync(file)

    return res.status(200).json(deleteImage)
}

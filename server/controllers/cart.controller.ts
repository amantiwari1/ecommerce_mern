import { NextFunction, Request, RequestHandler, Response } from "express";
import UserCollection from "../models/User/UserCollection";
import ProductCollection from "../models/Product/ProductCollection";

export interface IGetUserAuthInfoRequest extends Request {
  user?: {
    id?: string;
    email?: string | undefined;
    isAdmin?: boolean;
    cart?: Array<{}>;
  }; // or any other type
}

export const read: RequestHandler = async (
  req: IGetUserAuthInfoRequest,
  res: Response,
  next: NextFunction
) => {
  if (req.user && req.user.cart) {
    
    const cart = await Promise.all(req.user.cart.map(
        async (product: any) => {

            const oneCart = await ProductCollection.findById(product.ProductId)
            if (oneCart) {
                return {
                    id: product.ProductId,
                    quality: product.Quality,
                    title: oneCart.title,
                    titleslug: oneCart.titleslug,
                    featureImage: oneCart.featureImage,
                    price: oneCart.price
                };
            }
        }
    ))
    
    return res.status(200).json({ cart: cart });
  }
};



export const add: RequestHandler = async (
  req: IGetUserAuthInfoRequest,
  res: Response,
  next: NextFunction
) => {
  const user = await UserCollection.findById(req.user!.id).exec();

  if (user) {
    user.cart = [...user.cart, req.body];

    console.log(req.body);

    user.save();
    return res.status(201).json({ cart: req.body });
  }
};

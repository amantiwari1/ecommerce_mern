import {Request, RequestHandler, Response} from "express";
import UserCollection from "../models/User/UserCollection";
import ProductCollection from "../models/Product/ProductCollection";
import errorMessage from "../util/errorMessage";

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
  res: Response
) => {
  if (req.user && req.user.cart) {
    const cart = await Promise.all(
      req.user.cart.map(async (product: any) => {
        const oneCart = await ProductCollection.findById(product.ProductId);

        if (oneCart) {
          return {
            id: product.ProductId,
            quality: product.Quality,
            title: oneCart.title,
            titleslug: oneCart.titleslug,
            featureImage: oneCart.featureImage,
            price: oneCart.price,
            total: product.Quality * oneCart.price,
          };
        }
        return {
          id: product.ProductId,
          title: "this product has been removed",
        };
      })
    );

    return res.status(200).json({cart: cart});
  }
};

export const add: RequestHandler = async (
  req: IGetUserAuthInfoRequest,
  res: Response
) => {
  const user = await UserCollection.findById(req.user!.id).exec();
  const isExistCart = await UserCollection.findOneAndUpdate(
    {_id: req.user!.id, "cart.ProductId": req.body.ProductId},
    {
      $inc: {
        "cart.$.Quality": req.body.Quality,
      },
    }
  );

  if (user) {
    if (!isExistCart) {
      user.cart = [...user.cart, req.body];
      user.save();
    }

    return res.status(201).json({cart: req.body});
  }
};

export const remove: RequestHandler = async (
  req: IGetUserAuthInfoRequest,
  res: Response
) => {
  if (!req.params.id) {
    errorMessage.invalid("invalid id");
  }

  UserCollection.updateOne(
    {
      _id: req.user!.id,
    },
    {$pull: {cart: {ProductId: req.params.id}}}
  ).exec();

  return res.status(201).json({msg: "deleted"});
};

export const removeAll: RequestHandler = async (
  req: IGetUserAuthInfoRequest,
  res: Response
) => {
  UserCollection.updateOne(
    {
      _id: req.user!.id,
    },
    {$set: {cart: []}}
  ).exec();

  return res.status(201).json({msg: "deleted"});
};


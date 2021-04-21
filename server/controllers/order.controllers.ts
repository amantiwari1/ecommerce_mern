import {RequestHandler, Request, Response} from "express";
import OrderCollection from "../models/Order/OrderCollection";
import UserCollection from "../models/User/UserCollection";

export interface IGetUserAuthInfoRequest extends Request {
  user?: {
    id?: string;
    email?: string | undefined;
    isAdmin?: boolean;
    cart?: Array<{}>;
  }; // or any other type
}

export const create: RequestHandler = async (
  req: IGetUserAuthInfoRequest,
  res: Response
) => {
  const newOrder = new OrderCollection({
    user: req.user!.id,
    cart: req.body.cart,
    total: req.body.total,
  });
  UserCollection.findByIdAndUpdate(req.user!.id, {
    $push: {orders: newOrder._id},
  }).exec();
  const saved = await newOrder.save();

  return res.status(200).json(saved);
};

export const read: RequestHandler = async (
  req: IGetUserAuthInfoRequest,
  res: Response
) => {
  const orders = await UserCollection.findById(req.user!.id).populate("orders");
  return res.status(200).json(orders?.orders);
};

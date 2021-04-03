import { Request, Response } from "express";
import UserDocument from "../models/User/UserDocument";
import UserCollection from "../models/User/UserCollection";
import jwt from "jsonwebtoken";
import {JWT_SECRET} from "../util/secrets";

const createToken = (user: UserDocument) => {
  return jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
    expiresIn: 86400,
  });
};

export const signUp = async (
  req: Request,
  res: Response
): Promise<Response> => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ msg: "Please Send your email ans password" });
  }

  const user = await UserCollection.findOne({ email: req.body.email });

  if (user) {
    return res.status(400).json({ msg: " the user already exists" });
  }

  const newUser = new UserCollection(req.body);
  await newUser.save();
  return res.status(201).json({ msg: "created user" });
};

export const signIn = async (req: Request, res: Response) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ msg: "Please Send your email ans password" });
  }

  const user = await UserCollection.findOne({ email: req.body.email });

  if (!user) {
    return res.status(400).json({ msg: "the user  doesn't exists" });
  }

  const isMatch = await user.comparePassword(req.body.password);

  if (isMatch) {
    return res.status(200).json({ token: createToken(user) });
  }

  return res.status(400).json({
    msg: `the email or password are incorrct`,
  });

}
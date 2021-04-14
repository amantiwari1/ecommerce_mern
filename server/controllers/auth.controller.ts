import { NextFunction, Request, Response } from "express";
import UserDocument from "../models/User/UserDocument";
import UserCollection from "../models/User/UserCollection";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../util/secrets";

const createToken = (user: UserDocument) => {
  return jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
    expiresIn: 86400,
  });
};

export const signUp = async (
  req: Request,
  res: Response, 
  next: NextFunction
): Promise<Response> => {
  if (!req.body.email || !req.body.password) {
    throw new Error("Please Send your email ans password");
  }

  const user = await UserCollection.findOne({ email: req.body.email });

  if (user) {
    throw new Error(" the user already exists Please Sign In");
  }

  const newUser = new UserCollection(req.body);
  await newUser.save();
  return res.status(201).json({ msg: "created user" });
};

export const signIn = async (req: Request, res: Response) => {
  if (!req.body.email || !req.body.password) {
    throw new Error("Please Send your email ans password");
  }

  const user = await UserCollection.findOne({ email: req.body.email });

  if (!user) {
    throw new Error("the user  doesn't exists");
  }

  const isMatch = await user.comparePassword(req.body.password);

  if (isMatch) {
    return res
      .cookie("jwt", createToken(user), {
        httpOnly: true,
        secure: false,
        sameSite: true,
        maxAge: 86400 //--> SET TO TRUE ON PRODUCTION
      })
      .status(200)
      .json({
        message: "You have logged in :D",
      });
  }

  throw new Error("the email or password are incorrct");
};

export const logout = (req: Request, res: Response) => {
  if (req.cookies["jwt"]) {
    res.clearCookie("jwt").status(200).json({
      message: "You have logged out",
    });
  } else {
    res.status(401).json({
      error: "Invalid jwt",
    });
  }
};

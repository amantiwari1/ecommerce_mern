import {Request, Response} from "express";
import UserDocument from "../models/User/UserDocument";
import UserCollection from "../models/User/UserCollection";
import jwt from "jsonwebtoken";
import {JWT_SECRET} from "../util/secrets";
import errorMessage from "../util/errorMessage";

const createToken = (user: UserDocument) => {
  return jwt.sign({id: user._id, email: user.email}, JWT_SECRET, {
    expiresIn: 86400,
  });
};

export const signUp = async (
  req: Request,
  res: Response
): Promise<Response> => {
  if (!req.body.email || !req.body.password) {
    errorMessage.invalid("Please Send your email ans password");
  }

  const user = await UserCollection.findOne({email: req.body.email});

  if (user) {
    errorMessage.invalid(" the user already exists Please Sign In");
  }

  const newUser = new UserCollection(req.body);
  await newUser.save();
  return res.status(201).json({msg: "created user"});
};

export const signIn = async (req: Request, res: Response) => {
  if (!req.body.email || !req.body.password) {
    errorMessage.invalid("Please Send your email ans password");
  }

  const user = await UserCollection.findOne({email: req.body.email});

  if (!user) {
    return errorMessage.invalid("the user  doesn't exists");
  }

  const isMatch = await user.comparePassword(req.body.password);

  if (isMatch) {
    return res
      .cookie("jwt", createToken(user), {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        expires: new Date(Date.now() + 7200000),
      })
      .status(200)
      .json({
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        cart: user.cart,
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
    errorMessage.invalid("invalid jwt");
  }
};

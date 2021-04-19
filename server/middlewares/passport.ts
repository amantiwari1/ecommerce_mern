import {JwtFromRequestFunction, Strategy, StrategyOptions} from "passport-jwt";
import {Request} from "express";
import {JWT_SECRET} from "../util/secrets";
import UserCollection from "../models/User/UserCollection";
import errorMessage from "../util/errorMessage";

const cookieExtractor: JwtFromRequestFunction = (req: Request) => {
  let jwt = null;

  if (req && req.cookies) {
    jwt = req.cookies["jwt"];

    if (!jwt) {
      errorMessage.unauthorized();
    }
  }
  return jwt;
};

const opts: StrategyOptions = {
  jwtFromRequest: cookieExtractor,
  secretOrKey: JWT_SECRET,
};

interface User {
  id: string;
  email: string | undefined;
  isAdmin: boolean;
  cart: Array<{}>;
}

type verify = (error: any, user?: User | boolean, info?: any) => void;

export default new Strategy(opts, async (payload, done: verify) => {
  const user = await UserCollection.findById(payload.id);

  try {
    if (user) {
      const {expiration} = payload;

      if (Date.now() > expiration) {
        done("Unauthorized", false);
      }

      return done(undefined, {
        id: user._id,
        email: user.email,
        isAdmin: user.isAdmin,
        cart: user.cart,
      });
    }

    return done("Unauthorized", false);
  } catch (error) {
    console.log(error);
  }
});

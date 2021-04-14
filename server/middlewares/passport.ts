import {
  JwtFromRequestFunction,
  Strategy,
  StrategyOptions,
} from "passport-jwt";
import { NextFunction, Request } from "express";
import { JWT_SECRET } from "../util/secrets";
import UserCollection from "../models/User/UserCollection";

const cookieExtractor: JwtFromRequestFunction = (req: Request) => {
  let jwt = null;

  if (req && req.cookies) {
    jwt = req.cookies["jwt"];

    if (!jwt) {
      throw new Error("Not Authenticated");
    }
  }
  return jwt;
};

const opts: StrategyOptions = {
  jwtFromRequest: cookieExtractor,
  secretOrKey: JWT_SECRET,
};

export default new Strategy(opts, async (payload, done) => {
  const user = await UserCollection.findById(payload.id);

  try {
    if (user) {
      const { expiration } = payload;

      if (Date.now() > expiration) {
        done("Unauthorized", false);
      }

      return done(undefined, { id: user._id, email: user.email });
    }

    return done("Unauthorized", false);
  } catch (error) {
    console.log(error);
  }
});

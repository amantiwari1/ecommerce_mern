import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";
import {JWT_SECRET} from "../util/secrets";
import UserCollection from "../models/User/UserCollection";

const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET,
};
export default new Strategy(opts, async (payload, done) => {
  const user = await UserCollection.findById(payload.id);

  try {
    if (user) {
      return done(undefined, user);
    }

    return done(undefined, false);
  } catch (error) {
    console.log(error);
  }
});
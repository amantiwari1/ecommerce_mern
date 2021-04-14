import { Router } from "express";
import { use } from "../util/TryCatch";
import passport from "passport";
import {Response, Request} from "express"

const isLogin: Router = Router();

isLogin.get(
  "/verify",
  passport.authenticate("jwt", { session: false }),
  use((req: Request, res: Response) => {
      res.status(200).json({message: true})
  })
);


export default isLogin;


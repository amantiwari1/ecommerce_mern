import {Router} from "express";
import * as authController from "../controllers/auth.controller";
import {use} from "../util/TryCatch";

const auth = Router();

auth.post("/signup", use(authController.signUp));
auth.post("/signin", use(authController.signIn));
auth.get("/logout", use(authController.logout));

export default auth;

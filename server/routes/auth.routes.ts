import { Router } from "express";
import * as authController from "../controllers/auth.controller";

const auth = Router();

auth.post("/signup", authController.signUp);
auth.post("/signin", authController.signIn);

export default auth;
import {Router} from "express";
import {use} from "../util/TryCatch";
import passport from "passport";
import * as cartController from "../controllers/cart.controller";

const isAuth = passport.authenticate("jwt", {session: false});

const cart: Router = Router();

cart.get("/gets", isAuth, use(cartController.read));
cart.post("/create", isAuth, use(cartController.add));
cart.post("/delete/:id", isAuth, use(cartController.remove));
cart.delete("/deleteall/", isAuth, use(cartController.removeAll));

export default cart;
